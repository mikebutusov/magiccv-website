import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ fontFamily: "system-ui", maxWidth: 560, margin: "10vh auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: 24, fontWeight: 600 }}>Studio not configured yet</h1>
        <p style={{ marginTop: 12, lineHeight: 1.6, color: "#444" }}>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> in your
          environment (locally in <code>.env.local</code>, and in Vercel&rsquo;s project settings), then redeploy.
          The MagicCV content Studio will load here at <code>/studio</code>.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
