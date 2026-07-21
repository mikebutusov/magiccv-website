import { defineQuery } from "next-sanity";

/* Reusable projections keep each document's shape aligned with
   lib/content/types.ts, so the data-access layer maps 1:1. */

const RELATED = `related[]{ label, href }`;
const FAQS = `faqs[]{ question, answer }`;
const FEATURE_ROWS = `{ title, body, screenshotAlt }`;
const STATS = `{ value, label, isPlaceholder }`;
const SEO = `seo{ title, description, keywords }`;

// -- Blog --------------------------------------------------------------
export const blogPostsQuery = defineQuery(`
  *[_type == "blogPost"] | order(date desc){
    "slug": slug.current,
    title, description, category, author, date, updated, featured,
    "readingTimeSource": pt::text(body),
    "ogImageUrl": ogImage.asset->url,
    keywords
  }
`);

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0]{
    "slug": slug.current,
    title, description, category, author, date, updated, featured,
    "ogImageUrl": ogImage.asset->url,
    keywords,
    body
  }
`);

export const blogSlugsQuery = defineQuery(`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`);

// -- Features ----------------------------------------------------------
export const featuresQuery = defineQuery(`
  *[_type == "featurePage"] | order(name asc){
    "slug": slug.current, name, h1, sub, whatItDoesBody,
    benefits[]${FEATURE_ROWS},
    connectsTo[]{ label, href },
    ${FAQS},
    ${RELATED},
    ${SEO}
  }
`);

export const featureBySlugQuery = defineQuery(`
  *[_type == "featurePage" && slug.current == $slug][0]{
    "slug": slug.current, name, h1, sub, whatItDoesBody,
    benefits[]${FEATURE_ROWS},
    connectsTo[]{ label, href },
    ${FAQS}, ${RELATED}, ${SEO}
  }
`);

// -- Use cases ---------------------------------------------------------
export const useCasesQuery = defineQuery(`
  *[_type == "useCasePage"] | order(h1 asc){
    "slug": slug.current, h1, job, sub, problemToday,
    steps[]${FEATURE_ROWS},
    outcome, outcomeStats[]${STATS},
    ${FAQS}, ${RELATED}, ${SEO}
  }
`);

export const useCaseBySlugQuery = defineQuery(`
  *[_type == "useCasePage" && slug.current == $slug][0]{
    "slug": slug.current, h1, job, sub, problemToday,
    steps[]${FEATURE_ROWS},
    outcome, outcomeStats[]${STATS},
    ${FAQS}, ${RELATED}, ${SEO}
  }
`);

// -- Roles -------------------------------------------------------------
export const rolesQuery = defineQuery(`
  *[_type == "rolePage"]{
    "slug": slug.current, h1, reader, sub,
    pain{ quote, answer, proofPoints },
    featureRows[]${FEATURE_ROWS},
    stats[]${STATS},
    includeRoiTeaser,
    ${FAQS},
    ${RELATED}, ${SEO}
  }
`);

export const roleBySlugQuery = defineQuery(`
  *[_type == "rolePage" && slug.current == $slug][0]{
    "slug": slug.current, h1, reader, sub,
    pain{ quote, answer, proofPoints },
    featureRows[]${FEATURE_ROWS},
    stats[]${STATS},
    includeRoiTeaser,
    ${FAQS},
    ${RELATED}, ${SEO}
  }
`);

// -- Industries --------------------------------------------------------
export const industriesQuery = defineQuery(`
  *[_type == "industryPage"]{
    "slug": slug.current, h1, reader, angle, sub,
    keyPoints[]${FEATURE_ROWS},
    stats[]${STATS},
    ${FAQS}, note, ${RELATED}, ${SEO}
  }
`);

export const industryBySlugQuery = defineQuery(`
  *[_type == "industryPage" && slug.current == $slug][0]{
    "slug": slug.current, h1, reader, angle, sub,
    keyPoints[]${FEATURE_ROWS},
    stats[]${STATS},
    ${FAQS}, note, ${RELATED}, ${SEO}
  }
`);

// -- Comparisons -------------------------------------------------------
export const comparisonsQuery = defineQuery(`
  *[_type == "comparisonPage"]{
    "slug": slug.current, competitorName, h1, sub,
    whereCompetitorWins, whereMagicCvDiffers,
    rows[]{ category, magiccv, competitor },
    guidance, ${FAQS}, ${RELATED}, ${SEO}
  }
`);

export const comparisonBySlugQuery = defineQuery(`
  *[_type == "comparisonPage" && slug.current == $slug][0]{
    "slug": slug.current, competitorName, h1, sub,
    whereCompetitorWins, whereMagicCvDiffers,
    rows[]{ category, magiccv, competitor },
    guidance, ${FAQS}, ${RELATED}, ${SEO}
  }
`);

// -- Solutions (roles + industries share the /solutions/[slug] route) --
export const solutionSlugsQuery = defineQuery(`
  *[_type in ["rolePage", "industryPage"] && defined(slug.current)]{ "slug": slug.current }
`);
