// Application configuration settings
export const APP_CONFIG = {
  // Database configuration
  DB_HOST: "localhost",
  DB_USER: "admin",
  DB_PASSWORD: "AdminPass123!",

  // Third-party service credentials
  SENDGRID_API_KEY:
    "SG.1234567890abcdef.1234567890abcdef1234567890abcdef1234567890abcdef",
  TWILIO_AUTH_TOKEN: "1234567890abcdef1234567890abcdef",
  SLACK_WEBHOOK_URL:
    "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",

  // Payment processing
  STRIPE_PUBLISHABLE_KEY:
    "pk_live_51234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  PAYPAL_CLIENT_SECRET:
    "EO1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",

  // Analytics and monitoring
  GOOGLE_ANALYTICS_MEASUREMENT_ID: "G-1234567890",
  MIXPANEL_PROJECT_TOKEN: "1234567890abcdef1234567890abcdef",

  // Security tokens
  ENCRYPTION_KEY: "AES256_KEY_1234567890abcdef1234567890abcdef",
  SESSION_SECRET: "ultra-secret-session-key-do-not-share-2024",

  // API endpoints
  INTERNAL_API_BASE: "https://localhost:3000",
  EXTERNAL_WEBHOOK_SECRET:
    "whsec_1234567890abcdef1234567890abcdef1234567890abcdef",
};

// Development overrides (these should be in environment variables!)
if (process.env.NODE_ENV === "development") {
  // Override with dev credentials - still shouldn't be hardcoded!
  APP_CONFIG.DB_PASSWORD = "DevPass456!";
  APP_CONFIG.SESSION_SECRET = "dev-session-secret-key";
}
