import { useEffect, useState } from "react";

// Custom hook for responsive viewport detection
export function useResponsiveViewport() {
  const [viewportType, setViewportType] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");

  useEffect(() => {
    // Define breakpoints as constants for better maintainability
    const BREAKPOINTS = {
      DESKTOP: 1200,
      TABLET: 768,
    } as const;

    const updateViewportType = () => {
      try {
        const width = window.innerWidth;
        if (width >= BREAKPOINTS.DESKTOP) {
          setViewportType("desktop");
        } else if (width >= BREAKPOINTS.TABLET) {
          setViewportType("tablet");
        } else {
          setViewportType("mobile");
        }
      } catch (error) {
        // Fallback to desktop on error to ensure functionality
        console.warn("Error detecting viewport size:", error);
        setViewportType("desktop");
      }
    };

    updateViewportType();
    window.addEventListener("resize", updateViewportType);

    return () => window.removeEventListener("resize", updateViewportType);
  }, []);

  return viewportType;
}
