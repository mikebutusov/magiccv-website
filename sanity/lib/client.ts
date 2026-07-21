import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

/**
 * Server-only read token. Newer Sanity projects require authentication for
 * API reads even on "public" datasets, so we authenticate reads with a Viewer
 * token. It is NOT prefixed NEXT_PUBLIC, so it never reaches the browser; the
 * data layer (lib/data*) only runs server-side.
 */
const token = process.env.SANITY_API_READ_TOKEN;

/**
 * Null when no Sanity project is configured (e.g. before env vars are set),
 * so importing this never throws at build time. Callers guard on it.
 */
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // A token can't be combined with the CDN; rely on Next ISR for caching.
      useCdn: !token,
      perspective: "published",
      token,
    })
  : null;
