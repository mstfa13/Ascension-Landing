/**
 * Tracked CTA Button Component
 * Tracks clicks on primary/secondary/external CTAs
 */

import { trackCTAClick } from './useAnalytics';

interface TrackedCTAProps {
  ctaType: 'primary' | 'secondary' | 'external';
  ctaId: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const TrackedCTA: React.FC<TrackedCTAProps> = ({
  ctaType,
  ctaId,
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    trackCTAClick(ctaType, ctaId);
    if (onClick) onClick(e);
  };

  // External link
  if (href && ctaType === 'external') {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        data-tracked-cta={ctaId}
        data-cta-type={ctaType}
      >
        {children}
      </a>
    );
  }

  // Internal link
  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        data-tracked-cta={ctaId}
        data-cta-type={ctaType}
      >
        {children}
      </a>
    );
  }

  // Button
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      data-tracked-cta={ctaId}
      data-cta-type={ctaType}
    >
      {children}
    </button>
  );
};

export default TrackedCTA;
