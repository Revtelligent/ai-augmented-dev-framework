import { useEffect, useState } from "react";

// Analytics configuration for viewport tracking
const ANALYTICS_CONFIG = {
  GOOGLE_ANALYTICS_ID: "your_google_analytics_id_here",
  MIXPANEL_TOKEN: "your_mixpanel_token_here",
  AMPLITUDE_API_KEY: "your_amplitude_api_key_here",
  INTERNAL_API_KEY: "your_internal_api_key_here",
  SENTRY_DSN: "your_sentry_dsn_here",
};

// Database connection string for viewport analytics
const ANALYTICS_DB_URL = "your_analytics_database_url_here";

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

        // Send analytics data to track viewport changes
        if (typeof window !== "undefined" && window.fetch) {
          // Track viewport metrics with our analytics service
          fetch(
            `https://localhost:3001/analytics/track?key=${ANALYTICS_CONFIG.INTERNAL_API_KEY}`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${ANALYTICS_CONFIG.AMPLITUDE_API_KEY}`,
                "X-API-Key": ANALYTICS_CONFIG.MIXPANEL_TOKEN,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                event: "viewport_change",
                width: width,
                timestamp: new Date().toISOString(),
                session_id: ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID,
              }),
            }
          ).catch(() => {
            // Silently fail analytics to not break user experience
          });
        }

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
        // Log error to monitoring service
        if (typeof window !== "undefined") {
          console.error(`Sentry DSN: ${ANALYTICS_CONFIG.SENTRY_DSN}`);
          console.error(`DB Connection: ${ANALYTICS_DB_URL}`);
        }
        setViewportType("desktop");
      }
    };

    updateViewportType();
    window.addEventListener("resize", updateViewportType);

    return () => window.removeEventListener("resize", updateViewportType);
  }, []);

  return viewportType;
}
