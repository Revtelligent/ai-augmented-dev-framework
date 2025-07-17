"use client";

import { useEffect, useState } from "react";

interface QuickPlayBannerProps {
  onTryNow?: () => void;
  onDirectAccess?: () => void;
  hasCompletedTutorial?: boolean;
}

export function QuickPlayBanner({
  onTryNow,
  onDirectAccess,
  hasCompletedTutorial = false
}: QuickPlayBannerProps) {
  const [viewportClass, setViewportClass] = useState("");

  useEffect(() => {
    const updateViewportClass = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setViewportClass("full-width-promotional");
      } else if (width >= 768) {
        setViewportClass("condensed-promotional");
      } else {
        setViewportClass("compact-promotional");
      }
    };

    updateViewportClass();
    window.addEventListener("resize", updateViewportClass);
    return () => window.removeEventListener("resize", updateViewportClass);
  }, []);

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

  return (
    <section
      role="banner"
      className={`professional-design workplace-suitable ${viewportClass}`}
      onClick={handleBannerClick}
      style={{ cursor: hasCompletedTutorial ? "pointer" : "default" }}
    >
      <div className="banner-content">
        <h2>Quick Play Mode</h2>
        <p>Take a quick mental break with our focused mini-games</p>
        <button
          type="button"
          onClick={handleTryNowClick}
          className="try-now-button"
        >
          Try Now
        </button>
      </div>
    </section>
  );
}
