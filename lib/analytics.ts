interface AnalyticsEvent {
  action: string;
  source: string;
  timestamp: number;
}

export function logBannerInteraction(event: AnalyticsEvent): void {
  // Minimal implementation for tests to pass
  console.log("Analytics:", event);

  // In real implementation, this would send to analytics service
  // For now, just log to satisfy the test expectations
}
