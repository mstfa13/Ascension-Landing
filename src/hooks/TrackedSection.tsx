/**
 * Tracked Section Component
 * Wraps any section with automatic exposure and time tracking
 */

import { useEffect, useRef, useState } from 'react';
import {
  trackSectionExposure,
  startSectionTimer,
  pauseSectionTimer,
} from './useAnalytics';

interface TrackedSectionProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
}

export const TrackedSection: React.FC<TrackedSectionProps> = ({
  sectionId,
  children,
  className = '',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasBeenExposed, setHasBeenExposed] = useState(false);
  const exposureTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start exposure timer (1000ms requirement)
            if (!hasBeenExposed) {
              exposureTimer.current = setTimeout(() => {
                trackSectionExposure(sectionId);
                setHasBeenExposed(true);
              }, 1000);
            }
            
            // Start time tracking
            startSectionTimer(sectionId);
          } else {
            // Clear exposure timer if user scrolls away before 1000ms
            if (exposureTimer.current) {
              clearTimeout(exposureTimer.current);
              exposureTimer.current = null;
            }
            
            // Pause time tracking
            pauseSectionTimer(sectionId);
          }
        });
      },
      {
        threshold: 0.3, // 30% of section must be visible
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (exposureTimer.current) {
        clearTimeout(exposureTimer.current);
      }
      pauseSectionTimer(sectionId);
    };
  }, [sectionId, hasBeenExposed]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id={sectionId}
      className={className}
      data-tracked-section={sectionId}
    >
      {children}
    </section>
  );
};

export default TrackedSection;
