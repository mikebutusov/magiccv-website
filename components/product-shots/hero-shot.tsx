import { CvGeneratorShot } from "./cv-generator-shot";
import { CvListShot } from "./cv-list-shot";
import { CvPreviewShot } from "./cv-preview-shot";
import { TemplatesShot } from "./templates-shot";
import { ProfileShot } from "./profile-shot";

type Kind = "feature" | "useCase" | "role" | "industry" | "comparison";

const MAP: Record<Kind, Record<string, React.ReactNode>> = {
  feature: {
    "rfp-to-cv": <CvGeneratorShot />,
    "brand-templates": <TemplatesShot />,
    anonymization: <CvPreviewShot variant="anonymized" />,
    multilingual: <CvPreviewShot variant="multilingual" />,
    "profiles-skills": <CvListShot />,
  },
  useCase: {
    "tailor-cvs": <CvGeneratorShot />,
    "proposal-cv-pack": <CvGeneratorShot />,
    "centralize-cvs": <CvListShot />,
    "anonymize-cvs": <CvPreviewShot variant="anonymized" />,
    "translate-cvs": <CvPreviewShot variant="multilingual" />,
  },
  role: {
    sales: <CvGeneratorShot />,
    recruitment: <CvListShot />,
    hr: <ProfileShot />,
    "project-delivery": <CvPreviewShot />,
  },
  industry: {
    "it-consulting": <CvGeneratorShot />,
    "strategy-consulting": <CvGeneratorShot />,
    "design-agencies": <TemplatesShot />,
    "engineering-consulting": <CvPreviewShot />,
    "audit-advisory": <ProfileShot />,
    "public-sector": <CvPreviewShot variant="anonymized" />,
    "staffing-agencies": <CvListShot />,
  },
  comparison: {},
};

/** Picks the most fitting product mockup for a page's hero. */
export function heroShotFor(kind: Kind, slug: string): React.ReactNode {
  return MAP[kind][slug] ?? <CvGeneratorShot />;
}
