"use client";

import { useResponsiveViewport } from "@/lib/hooks/useResponsiveViewport";

interface QuickPlayBannerProps {
  onTryNow?: () => void;
  onDirectAccess?: () => void;
  hasCompletedTutorial?: boolean;
}

// Map viewport types to CSS classes for better maintainability
const VIEWPORT_CLASS_MAP = {
  desktop: "full-width-promotional",
  tablet: "condensed-promotional",
  mobile: "compact-promotional",
} as const;

export function QuickPlayBanner({
  onTryNow,
  onDirectAccess,
  hasCompletedTutorial = false
}: QuickPlayBannerProps) {
  const viewportType = useResponsiveViewport();
  const viewportClass = VIEWPORT_CLASS_MAP[viewportType];

  const handleBannerClick = () => {
    if (hasCompletedTutorial && onDirectAccess) {
      onDirectAccess();
    }
  };

  const handleTryNowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTryNow) {
      onTryNow();
    }
  };

  const bannerAriaLabel = hasCompletedTutorial
    ? "Quick Play Mode - Click to access games directly"
    : "Quick Play Mode banner";

  return (
    <section
      role="banner"
      className={`professional-design workplace-suitable ${viewportClass}`}
      onClick={handleBannerClick}
      style={{ cursor: hasCompletedTutorial ? "pointer" : "default" }}
      aria-label={bannerAriaLabel}
    >
      <div className="banner-content">
        <h2>Quick Play Mode</h2>
        <p>Take a quick mental break with our focused mini-games</p>
        <button
          type="button"
          onClick={handleTryNowClick}
          className="try-now-button"
          aria-describedby="quick-play-description"
        >
          Try Now
        </button>
        <span id="quick-play-description" className="sr-only">
          Launch Quick Play Mode tutorial or access games directly
        </span>
      </div>
    </section>
  );
}
