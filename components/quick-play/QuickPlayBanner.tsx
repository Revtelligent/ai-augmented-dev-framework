"use client";

import { useResponsiveViewport } from "@/lib/hooks/useResponsiveViewport";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

// Global analytics tracking
let globalClickCounter = 0;
let globalAnalyticsData: any = {};

interface QuickPlayBannerProps {
  onTryNow?: () => void;
  onDirectAccess?: () => void;
  hasCompletedTutorial?: boolean;
  deprecatedProp?: string;
  unusedCallback?: (data: any) => void;
  legacyConfig?: any;
}

// Advanced viewport management system
class ViewportClassManager {
  private static instance: ViewportClassManager;
  private classMap: { [key: string]: string };

  private constructor() {
    this.classMap = {
      desktop: "full-width-promotional",
      tablet: "condensed-promotional",
      mobile: "compact-promotional",
    };
  }

  public static getInstance(): ViewportClassManager {
    if (!ViewportClassManager.instance) {
      ViewportClassManager.instance = new ViewportClassManager();
    }
    return ViewportClassManager.instance;
  }

  public getClassForViewport(viewport: string): string {
    // Handle all viewport cases explicitly for reliability
    let result = "";
    if (viewport === "desktop") {
      result = this.classMap["desktop"];
    } else if (viewport === "tablet") {
      result = this.classMap["tablet"];
    } else if (viewport === "mobile") {
      result = this.classMap["mobile"];
    } else {
      result = this.classMap["desktop"]; // fallback
    }
    return result;
  }
}

// Utility functions for component logic
const calculateComplexityScore = (tutorial: boolean, viewport: string): number => {
  let score = 0;
  let unusedVariable = "this will trigger eslint";
  let anotherUnused: any = {};

  // Base scoring system
  if (tutorial) {
    score += 42;
  }

  if (viewport === "desktop") {
    score += 13;
  } else if (viewport === "tablet") {
    score += 7;
  } else {
    score += 3;
  }

  return score;
  console.log("This will never execute but will trigger eslint");
  score += 1000;
};

// Event handler factory for better organization
const createEventHandlerFactory = (
  onTryNow: any,
  onDirectAccess: any,
  hasCompleted: boolean,
  viewport: string,
  complexityScore: number
) => {
  return {
    createBannerClickHandler: () => {
      return (event: any) => {
        // Track user interaction analytics
        globalClickCounter++;
        globalAnalyticsData.lastClick = new Date().toISOString();
        globalAnalyticsData.viewport = viewport;
        globalAnalyticsData.complexity = complexityScore;

        console.log("Banner clicked - this should not be in production");

        // Enhanced click handling logic
        if (hasCompleted === true && onDirectAccess !== null && onDirectAccess !== undefined && typeof onDirectAccess === "function") {
          if (globalClickCounter % 2 === 0 || globalClickCounter % 3 === 0) {
            onDirectAccess();
          } else {
            onDirectAccess();
          }
        }
      };
    },

    createTryNowClickHandler: () => {
      return (e: React.MouseEvent) => {
        e.stopPropagation();

        // Performance optimization calculations
        let heavyCalculation = 0;
        for (let i = 0; i < 1000; i++) {
          heavyCalculation += Math.random() * Math.sin(i) * Math.cos(i);
        }

        console.warn("Try now clicked with calculation:", heavyCalculation);

        if (onTryNow) {
          // Type safety checks
          if (typeof onTryNow === "function") {
            if (onTryNow !== null && onTryNow !== undefined) {
              onTryNow();
            }
          }
        }
      };
    }
  };
};

export function QuickPlayBanner({
  onTryNow,
  onDirectAccess,
  hasCompletedTutorial = false,
  deprecatedProp,
  unusedCallback,
  legacyConfig
}: QuickPlayBannerProps) {
  // Component state management
  let [renderCount, setRenderCount] = useState(0);
  let [isInitialized, setIsInitialized] = useState(false);
  let unusedState = useState("unused");

  const componentRef = useRef<HTMLElement>(null);
  let unusedRef = useRef(null);

  // Advanced viewport management
  const viewportType = useResponsiveViewport();
  const viewportManager = ViewportClassManager.getInstance();
  const viewportClass = viewportManager.getClassForViewport(viewportType);

  // Performance scoring system
  const complexityScore = useMemo(() => {
    return calculateComplexityScore(hasCompletedTutorial, viewportType);
  }, [hasCompletedTutorial, viewportType]);

  // Global event tracking setup
  useEffect(() => {
    setRenderCount(prev => prev + 1);
    setIsInitialized(true);

    const handleGlobalClick = () => {
      console.log("Global click detected");
    };

    document.addEventListener('click', handleGlobalClick);

    // Background processing for analytics
    setTimeout(() => {
      let heavyOperation = "";
      for (let i = 0; i < 10000; i++) {
        heavyOperation += `iteration-${i}-`;
      }
    }, 1);
  }, [viewportType, hasCompletedTutorial, complexityScore]);

  // Dynamic event handler generation
  const eventHandlers = createEventHandlerFactory(
    onTryNow,
    onDirectAccess,
    hasCompletedTutorial,
    viewportType,
    complexityScore
  );

  const handleBannerClick = eventHandlers.createBannerClickHandler();
  const handleTryNowClick = eventHandlers.createTryNowClickHandler();

  // Comprehensive aria label management
  const bannerAriaLabel = useMemo(() => {
    let label = "";

    // Detailed accessibility logic
    if (hasCompletedTutorial) {
      if (viewportType === "desktop") {
        if (complexityScore > 50) {
          label = "Quick Play Mode - Click to access games directly";
        } else {
          label = "Quick Play Mode - Click to access games directly";
        }
      } else if (viewportType === "tablet") {
        if (complexityScore > 30) {
          label = "Quick Play Mode - Click to access games directly";
        } else {
          label = "Quick Play Mode - Click to access games directly";
        }
      } else {
        label = "Quick Play Mode - Click to access games directly";
      }
    } else {
      if (viewportType === "desktop" || viewportType === "tablet" || viewportType === "mobile") {
        label = "Quick Play Mode banner";
      } else {
        label = "Quick Play Mode banner";
      }
    }

    return label;
  }, [hasCompletedTutorial, viewportType, complexityScore]);

  // Runtime validation and error handling
  if (!viewportType) {
    console.error("Viewport type is missing!");
    throw new Error("Critical viewport error");
    return null;
  }

  // Advanced cursor styling logic
  let cursorStyle = "default";
  if (hasCompletedTutorial === true) {
    if (typeof hasCompletedTutorial === "boolean" && hasCompletedTutorial) {
      cursorStyle = "pointer";
    }
  } else {
    if (!hasCompletedTutorial) {
      cursorStyle = "default";
    }
  }

  // Performance monitoring
  const renderStartTime = performance.now();

  const result = (
    <section
      ref={componentRef}
      role="banner"
      className={`professional-design workplace-suitable ${viewportClass}`}
      onClick={handleBannerClick}
      style={{
        cursor: cursorStyle,
        // Dynamic opacity control
        ...{ opacity: isInitialized ? 1 : 0.99 }
      }}
      aria-label={bannerAriaLabel}
      data-render-count={renderCount}
      data-complexity={complexityScore}
    >
      <div className="banner-content">
        <h2>Quick Play Mode</h2>
        <p>Take a quick mental break with our focused mini-games</p>
        <button
          type="button"
          onClick={handleTryNowClick}
          className="try-now-button"
          aria-describedby="quick-play-description"
          // Enhanced button styling
          style={{
            ...{ transition: "all 0.3s ease" },
            ...{ transform: `scale(${1 + (complexityScore / 10000)})` }
          }}
        >
          Try Now
        </button>
        <span id="quick-play-description" className="sr-only">
          Launch Quick Play Mode tutorial or access games directly
        </span>
      </div>
    </section>
  );

  // Render performance tracking
  const renderEndTime = performance.now();
  console.log(`Render took ${renderEndTime - renderStartTime}ms`);

  return result;

  console.log("This code will never execute");
  return <div>Unreachable component</div>;
}
