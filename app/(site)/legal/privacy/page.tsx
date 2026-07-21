import { LegalStubPage } from "@/components/templates/legal-stub-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How MagicCV collects, uses, and protects personal data.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalStubPage
      title="Privacy Policy"
      sections={[
        "What personal data MagicCV collects, and why",
        "How consultant profile data is stored and processed (EU data residency)",
        "Data subject rights (access, correction, deletion) and how to exercise them",
        "Data retention periods",
        "Subprocessors and third-party data handling",
        "Cookie and analytics disclosure (PostHog, Plausible)",
        "Contact information for privacy inquiries",
      ]}
    />
  );
}
