import { LegalStubPage } from "@/components/templates/legal-stub-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Processing Agreement",
  description: "MagicCV's Data Processing Agreement (DPA) for customers processing personal data under GDPR.",
  path: "/legal/dpa",
});

export default function DpaPage() {
  return (
    <LegalStubPage
      title="Data Processing Agreement"
      sections={[
        "Roles and responsibilities (controller vs. processor)",
        "Subject matter, nature, and purpose of processing",
        "Categories of data subjects and personal data",
        "Subprocessor list and approval process",
        "Data security measures",
        "Data breach notification process",
        "Data return and deletion on contract termination",
      ]}
    />
  );
}
