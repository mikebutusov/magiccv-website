import { LegalStubPage } from "@/components/templates/legal-stub-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing use of MagicCV.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalStubPage
      title="Terms of Service"
      sections={[
        "Account eligibility and responsibilities",
        "Subscription plans, billing, and cancellation",
        "Free plan terms (10 profiles / 30 CVs, no credit card)",
        "Acceptable use",
        "Intellectual property",
        "Limitation of liability",
        "Governing law and dispute resolution",
      ]}
    />
  );
}
