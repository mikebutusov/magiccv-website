/**
 * Content types shaped to migrate cleanly to Sanity documents later:
 * each `_type` mirrors a future Sanity schema name, `slug` mirrors a
 * Sanity slug field. Swapping the data source is a fetch-layer change,
 * not a component rewrite.
 */

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureRowItem {
  title: string;
  body: string;
  screenshotAlt: string;
}

export interface StatItem {
  value: string;
  label: string;
  isPlaceholder?: boolean;
}

export interface PersonaPain {
  quote: string;
  answer: string;
  proofPoints: string[];
}

export interface FeaturePage {
  _type: "featurePage";
  slug: string;
  name: string;
  h1: string;
  sub: string;
  whatItDoesBody: string;
  benefits: FeatureRowItem[];
  connectsTo: RelatedLink[];
  faqs: FaqItem[];
  related: RelatedLink[];
  seo: SeoMeta;
}

export interface UseCasePage {
  _type: "useCasePage";
  slug: string;
  job: string;
  h1: string;
  sub: string;
  problemToday: string;
  steps: FeatureRowItem[];
  outcome: string;
  outcomeStats: StatItem[];
  faqs: FaqItem[];
  related: RelatedLink[];
  seo: SeoMeta;
}

export interface RolePage {
  _type: "rolePage";
  slug: string;
  reader: string;
  h1: string;
  sub: string;
  pain: PersonaPain;
  featureRows: FeatureRowItem[];
  stats: StatItem[];
  includeRoiTeaser?: boolean;
  /** Optional during locale transition - localized files may lag the EN rewrite. */
  faqs?: FaqItem[];
  related: RelatedLink[];
  seo: SeoMeta;
}

export interface IndustryPage {
  _type: "industryPage";
  slug: string;
  reader: string;
  angle: string;
  h1: string;
  sub: string;
  keyPoints: FeatureRowItem[];
  stats: StatItem[];
  faqs: FaqItem[];
  note?: string;
  related: RelatedLink[];
  seo: SeoMeta;
}

export interface ComparisonRow {
  category: string;
  magiccv: string;
  competitor: string;
}

export interface ComparisonPage {
  _type: "comparisonPage";
  slug: string;
  competitorName: string;
  h1: string;
  sub: string;
  whereCompetitorWins: string[];
  whereMagicCvDiffers: string[];
  rows: ComparisonRow[];
  guidance: string;
  faqs: FaqItem[];
  related: RelatedLink[];
  seo: SeoMeta;
}
