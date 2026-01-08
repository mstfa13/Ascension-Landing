/**
 * Analytics Initializer
 * Auto-tracks sections on the page based on data attributes
 * Add data-section="section-name" to any element to track it
 */

import { useEffect } from 'react';
import {
  trackSectionExposure,
  startSectionTimer,
  pauseSectionTimer,
  trackCTAClick,
} from './useAnalytics';

// Track which sections have been exposed (for 1000ms visibility requirement)
const exposureTimers = new Map<string, ReturnType<typeof setTimeout>>();
const exposedSections = new Set<string>();

export const AnalyticsInit: React.FC = () => {
  useEffect(() => {
    // Find all trackable sections
    const setupSectionTracking = () => {
      // Auto-detect sections by common patterns
      const sections = document.querySelectorAll(
        '[data-section], [id]:not([id=""]), section[class*="py-"]'
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement;
            const sectionId = element.dataset.section || element.id || generateSectionId(element);
            
            if (!sectionId) return;

            if (entry.isIntersecting) {
              // Start exposure timer (1000ms requirement)
              if (!exposedSections.has(sectionId)) {
                exposureTimers.set(sectionId, setTimeout(() => {
                  trackSectionExposure(sectionId);
                  exposedSections.add(sectionId);
                }, 1000));
              }
              
              // Start time tracking
              startSectionTimer(sectionId);
            } else {
              // Clear exposure timer if user scrolls away before 1000ms
              const timer = exposureTimers.get(sectionId);
              if (timer) {
                clearTimeout(timer);
                exposureTimers.delete(sectionId);
              }
              
              // Pause time tracking
              pauseSectionTimer(sectionId);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px',
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    };

    // Setup CTA tracking
    const setupCTATracking = () => {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const cta = target.closest('[data-cta], .btn-primary, .btn-secondary, a[href^="http"]') as HTMLElement;
        
        if (!cta) return;

        let ctaType: 'primary' | 'secondary' | 'external' = 'secondary';
        let ctaId = cta.dataset.cta || cta.textContent?.trim().slice(0, 30) || 'unknown';

        if (cta.classList.contains('btn-primary')) {
          ctaType = 'primary';
        } else if (cta.tagName === 'A') {
          const href = (cta as HTMLAnchorElement).href;
          if (href && !href.startsWith(window.location.origin)) {
            ctaType = 'external';
          }
        }

        // Check for explicit data attributes
        if (cta.dataset.ctaType) {
          ctaType = cta.dataset.ctaType as 'primary' | 'secondary' | 'external';
        }

        trackCTAClick(ctaType, ctaId);
      };

      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    };

    // Initialize after a short delay to let DOM settle
    const timer = setTimeout(() => {
      const cleanupSections = setupSectionTracking();
      const cleanupCTA = setupCTATracking();

      return () => {
        cleanupSections?.();
        cleanupCTA?.();
      };
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

// Generate a section ID from element context
function generateSectionId(element: HTMLElement): string {
  // Try to get ID from heading
  const heading = element.querySelector('h1, h2, h3');
  if (heading) {
    return heading.textContent?.trim().toLowerCase().replace(/\s+/g, '-').slice(0, 30) || '';
  }
  
  // Try to get from class
  const classes = element.className.split(' ');
  for (const cls of classes) {
    if (cls.includes('hero') || cls.includes('section') || cls.includes('cta')) {
      return cls;
    }
  }
  
  return '';
}

export default AnalyticsInit;
