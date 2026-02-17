import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://23d8d1befe632dc9af3fc786c9a9f3a0@o4510899973193728.ingest.us.sentry.io/4510899984465920",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});