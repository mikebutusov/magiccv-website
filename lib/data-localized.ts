import "server-only";
import type { Locale } from "@/lib/i18n";
import type {
  FeaturePage,
  UseCasePage,
  RolePage,
  IndustryPage,
  ComparisonPage,
} from "@/lib/content/types";

export interface LocalizedContent {
  features: FeaturePage[];
  useCases: UseCasePage[];
  roles: RolePage[];
  industries: IndustryPage[];
  comparisons: ComparisonPage[];
}

/**
 * Localized content is code-managed (lib/content/i18n/<locale>/), translated
 * from the EN source. EN remains the Sanity-editable canonical content (see
 * lib/data.ts); editing EN in the Studio does NOT auto-update translations.
 */
const loaders: Record<Locale, () => Promise<LocalizedContent>> = {
  de: () => import("@/lib/content/i18n/de") as Promise<LocalizedContent>,
  fr: () => import("@/lib/content/i18n/fr") as Promise<LocalizedContent>,
  nl: () => import("@/lib/content/i18n/nl") as Promise<LocalizedContent>,
  sv: () => import("@/lib/content/i18n/sv") as Promise<LocalizedContent>,
};

export async function getLocalizedContent(locale: Locale): Promise<LocalizedContent> {
  return loaders[locale]();
}
