export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/**
 * True only when a real Sanity project is wired up. The data-access layer
 * (lib/data/*) checks this and falls back to local TS/MDX content when false,
 * so builds and deploys succeed with or without Sanity env vars set.
 */
export const isSanityConfigured = projectId.length > 0;
