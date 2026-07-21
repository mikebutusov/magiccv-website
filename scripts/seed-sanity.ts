/**
 * Transforms the in-repo TS content into a Sanity NDJSON file that can be
 * imported with `sanity dataset import`. Deterministic document _ids mean a
 * re-run (with --replace) updates existing docs rather than duplicating.
 *
 * Usage:
 *   npx tsx scripts/seed-sanity.ts            # writes scripts/seed.ndjson
 *   npx sanity dataset import scripts/seed.ndjson production --replace
 *
 * Blog posts are intentionally NOT seeded (authored fresh in the Studio).
 */
import fs from "node:fs";
import path from "node:path";
import { features } from "../lib/content/features";
import { useCases } from "../lib/content/use-cases";
import { roles } from "../lib/content/roles";
import { industries } from "../lib/content/industries";
import { comparisons } from "../lib/content/comparisons";
import type {
  FaqItem,
  FeatureRowItem,
  PersonaPain,
  RelatedLink,
  SeoMeta,
  StatItem,
  ComparisonRow,
} from "../lib/content/types";

// Stable per-array keys so re-imports don't churn keys.
const keyed = <T extends object>(arr: T[] | undefined, type: string) =>
  (arr ?? []).map((item, i) => ({ _type: type, _key: `${type}-${i}`, ...item }));

const slug = (current: string) => ({ _type: "slug", current });
const seo = (s: SeoMeta) => ({ _type: "seo", ...s });
const related = (r: RelatedLink[]) => keyed(r, "relatedLink");
const faqs = (f: FaqItem[]) => keyed(f, "faqItem");
const rows = (f: FeatureRowItem[]) => keyed(f, "featureRow");
const stats = (s: StatItem[]) => keyed(s, "stat");
const compRows = (c: ComparisonRow[]) => keyed(c, "comparisonRow");

const docs: Record<string, unknown>[] = [];

for (const f of features) {
  docs.push({
    _id: `featurePage.${f.slug}`,
    _type: "featurePage",
    name: f.name,
    slug: slug(f.slug),
    h1: f.h1,
    sub: f.sub,
    whatItDoesBody: f.whatItDoesBody,
    benefits: rows(f.benefits),
    connectsTo: related(f.connectsTo),
    faqs: faqs(f.faqs),
    related: related(f.related),
    seo: seo(f.seo),
  });
}

for (const u of useCases) {
  docs.push({
    _id: `useCasePage.${u.slug}`,
    _type: "useCasePage",
    h1: u.h1,
    slug: slug(u.slug),
    job: u.job,
    sub: u.sub,
    problemToday: u.problemToday,
    steps: rows(u.steps),
    outcome: u.outcome,
    outcomeStats: stats(u.outcomeStats),
    faqs: faqs(u.faqs),
    related: related(u.related),
    seo: seo(u.seo),
  });
}

for (const r of roles) {
  const pain: PersonaPain = r.pain;
  docs.push({
    _id: `rolePage.${r.slug}`,
    _type: "rolePage",
    h1: r.h1,
    slug: slug(r.slug),
    reader: r.reader,
    sub: r.sub,
    pain: { _type: "personaPain", quote: pain.quote, answer: pain.answer, proofPoints: pain.proofPoints },
    featureRows: rows(r.featureRows),
    stats: stats(r.stats),
    includeRoiTeaser: r.includeRoiTeaser ?? false,
    faqs: faqs(r.faqs ?? []),
    related: related(r.related),
    seo: seo(r.seo),
  });
}

for (const i of industries) {
  docs.push({
    _id: `industryPage.${i.slug}`,
    _type: "industryPage",
    h1: i.h1,
    slug: slug(i.slug),
    reader: i.reader,
    angle: i.angle,
    sub: i.sub,
    keyPoints: rows(i.keyPoints),
    stats: stats(i.stats),
    faqs: faqs(i.faqs),
    ...(i.note ? { note: i.note } : {}),
    related: related(i.related),
    seo: seo(i.seo),
  });
}

for (const c of comparisons) {
  docs.push({
    _id: `comparisonPage.${c.slug}`,
    _type: "comparisonPage",
    competitorName: c.competitorName,
    slug: slug(c.slug),
    h1: c.h1,
    sub: c.sub,
    whereCompetitorWins: c.whereCompetitorWins,
    whereMagicCvDiffers: c.whereMagicCvDiffers,
    rows: compRows(c.rows),
    guidance: c.guidance,
    faqs: faqs(c.faqs),
    related: related(c.related),
    seo: seo(c.seo),
  });
}

const outPath = path.join(process.cwd(), "scripts", "seed.ndjson");
fs.writeFileSync(outPath, docs.map((d) => JSON.stringify(d)).join("\n") + "\n");
console.log(`Wrote ${docs.length} documents to ${outPath}`);
