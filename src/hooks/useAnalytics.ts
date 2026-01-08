/**
 * Privacy-Minimal Behavioral Analytics Hook
 * No personal data, no fingerprinting, first-party only
 */

// Generate anonymous session ID (in-memory, non-persistent)
const generateSessionId = (): string => {
  return `s_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

// Session ID stored in memory only
let sessionId: string | null = null;
const getSessionId = (): string => {
  if (!sessionId) {
    sessionId = generateSessionId();
  }
  return sessionId;
};

// Track which events have been fired (prevent duplicates)
const firedEvents = {
  sectionExposed: new Set<string>(),
  scrollMilestones: new Set<number>(),
  sectionTimeThresholds: new Map<string, Set<number>>(),
  ctaClicks: new Set<string>(),
};

// Section visibility timers
const sectionTimers = new Map<string, { startTime: number; accumulated: number }>();
const sectionThresholds = [3, 7, 15]; // seconds

// API endpoint - configurable
const API_ENDPOINT = import.meta.env.VITE_ANALYTICS_API || '/api/analytics';

// Queue events for batch sending
let eventQueue: AnalyticsEvent[] = [];
let flushTimeout: ReturnType<typeof setTimeout> | null = null;

interface AnalyticsEvent {
  event: string;
  timestamp: number;
  session_id: string;
  [key: string]: string | number | boolean;
}

// Send event to backend
const sendEvent = async (eventData: AnalyticsEvent): Promise<void> => {
  eventQueue.push(eventData);
  
  // Debounce: flush after 1 second of no new events
  if (flushTimeout) clearTimeout(flushTimeout);
  flushTimeout = setTimeout(flushEvents, 1000);
};

const flushEvents = async (): Promise<void> => {
  if (eventQueue.length === 0) return;
  
  const eventsToSend = [...eventQueue];
  eventQueue = [];
  
  try {
    await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: eventsToSend }),
      keepalive: true, // Important for beforeunload
    });
  } catch (error) {
    // Silently fail - analytics should never break the site
    console.debug('Analytics send failed:', error);
  }
};

/**
 * Track section exposure (fires when section is visible for ≥1000ms)
 */
export const trackSectionExposure = (sectionId: string): void => {
  if (firedEvents.sectionExposed.has(sectionId)) return;
  
  firedEvents.sectionExposed.add(sectionId);
  
  sendEvent({
    event: 'section_exposed',
    section_id: sectionId,
    timestamp: Date.now(),
    session_id: getSessionId(),
  });
};

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (percentage: 25 | 50 | 75 | 100): void => {
  if (firedEvents.scrollMilestones.has(percentage)) return;
  
  firedEvents.scrollMilestones.add(percentage);
  
  sendEvent({
    event: 'scroll_depth',
    percentage,
    timestamp: Date.now(),
    session_id: getSessionId(),
  });
};

/**
 * Start timing a section (call when section enters viewport)
 */
export const startSectionTimer = (sectionId: string): void => {
  const existing = sectionTimers.get(sectionId);
  if (existing) {
    // Resume timer
    sectionTimers.set(sectionId, {
      startTime: Date.now(),
      accumulated: existing.accumulated,
    });
  } else {
    // New timer
    sectionTimers.set(sectionId, {
      startTime: Date.now(),
      accumulated: 0,
    });
    if (!firedEvents.sectionTimeThresholds.has(sectionId)) {
      firedEvents.sectionTimeThresholds.set(sectionId, new Set());
    }
  }
};

/**
 * Pause timing a section (call when section exits viewport)
 */
export const pauseSectionTimer = (sectionId: string): void => {
  const timer = sectionTimers.get(sectionId);
  if (!timer) return;
  
  const elapsed = (Date.now() - timer.startTime) / 1000;
  const totalTime = timer.accumulated + elapsed;
  
  // Check thresholds
  const firedThresholds = firedEvents.sectionTimeThresholds.get(sectionId) || new Set();
  
  for (const threshold of sectionThresholds) {
    if (totalTime >= threshold && !firedThresholds.has(threshold)) {
      firedThresholds.add(threshold);
      firedEvents.sectionTimeThresholds.set(sectionId, firedThresholds);
      
      sendEvent({
        event: 'section_time_threshold',
        section_id: sectionId,
        threshold,
        timestamp: Date.now(),
        session_id: getSessionId(),
      });
    }
  }
  
  // Update accumulated time
  sectionTimers.set(sectionId, {
    startTime: 0,
    accumulated: totalTime,
  });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (
  ctaType: 'primary' | 'secondary' | 'external',
  ctaId: string
): void => {
  const key = `${ctaType}_${ctaId}`;
  if (firedEvents.ctaClicks.has(key)) return;
  
  firedEvents.ctaClicks.add(key);
  
  sendEvent({
    event: 'cta_click',
    cta_type: ctaType,
    cta_id: ctaId,
    timestamp: Date.now(),
    session_id: getSessionId(),
  });
};

/**
 * Track page abandonment
 */
const trackAbandonment = (): void => {
  // Find last exposed section
  const exposedSections = Array.from(firedEvents.sectionExposed);
  const lastSection = exposedSections[exposedSections.length - 1] || 'unknown';
  
  // Pause all active timers to capture final times
  sectionTimers.forEach((_, sectionId) => {
    pauseSectionTimer(sectionId);
  });
  
  sendEvent({
    event: 'page_abandonment',
    last_section_id: lastSection,
    timestamp: Date.now(),
    session_id: getSessionId(),
  });
  
  // Flush immediately
  flushEvents();
};

// Set up abandonment tracking
if (typeof window !== 'undefined') {
  // beforeunload for tab close/navigation
  window.addEventListener('beforeunload', trackAbandonment);
  
  // visibilitychange for mobile/tab switch
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackAbandonment();
    }
  });
}

/**
 * Scroll depth tracker - call this on scroll events
 */
let lastScrollCheck = 0;
export const checkScrollDepth = (): void => {
  // Throttle checks
  const now = Date.now();
  if (now - lastScrollCheck < 100) return;
  lastScrollCheck = now;
  
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return;
  
  const scrollPercent = (window.scrollY / scrollHeight) * 100;
  
  if (scrollPercent >= 100) trackScrollDepth(100);
  else if (scrollPercent >= 75) trackScrollDepth(75);
  else if (scrollPercent >= 50) trackScrollDepth(50);
  else if (scrollPercent >= 25) trackScrollDepth(25);
};

// Initialize scroll tracking
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', checkScrollDepth, { passive: true });
}
