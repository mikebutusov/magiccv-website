import { defineArrayMember, defineField, defineType } from "sanity";

/** Document types. Field names mirror lib/content/types.ts and the blog
 *  frontmatter so the fetch layer maps 1:1. */

const slugField = defineField({
  name: "slug",
  type: "slug",
  options: { source: (doc: Record<string, unknown>) => (doc.name || doc.h1 || doc.title) as string, maxLength: 96 },
  validation: (r) => r.required(),
});

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    { ...slugField, options: { ...slugField.options, source: "title" } },
    defineField({ name: "description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          "Proposal & bid ops",
          "CV management",
          "AI for consulting",
          "Comparisons & alternatives",
          "Product & company",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "author", type: "string", initialValue: "MagicCV Team", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Published date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "updated", title: "Updated date", type: "date" }),
    defineField({ name: "featured", title: "Featured post", type: "boolean", initialValue: false }),
    defineField({ name: "ogImage", title: "OG image", type: "image", options: { hotspot: true } }),
    defineField({ name: "keywords", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "body",
      title: "Article body",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
        defineArrayMember({
          name: "trialCta",
          title: "Trial CTA (inline banner)",
          type: "object",
          fields: [defineField({ name: "note", type: "string", initialValue: "Inline trial CTA renders here" })],
          preview: { prepare: () => ({ title: "-- Inline Trial CTA --" }) },
        }),
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});

export const featurePage = defineType({
  name: "featurePage",
  title: "Feature page",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Feature name (nav label)", type: "string", validation: (r) => r.required() }),
    slugField,
    defineField({ name: "h1", title: "H1", type: "string", validation: (r) => r.required() }),
    defineField({ name: "sub", title: "Sub-headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "whatItDoesBody", title: "What it does (body)", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({ name: "benefits", type: "array", of: [{ type: "featureRow" }] }),
    defineField({ name: "connectsTo", title: "Connects to", type: "array", of: [{ type: "relatedLink" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    defineField({ name: "related", title: "Related links", type: "array", of: [{ type: "relatedLink" }] }),
    defineField({ name: "seo", type: "seo", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "name" } },
});

export const useCasePage = defineType({
  name: "useCasePage",
  title: "Use-case page",
  type: "document",
  fields: [
    defineField({ name: "h1", title: "H1", type: "string", validation: (r) => r.required() }),
    { ...slugField, options: { ...slugField.options, source: "h1" } },
    defineField({ name: "job", title: "Job-to-be-done", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "sub", title: "Sub-headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "problemToday", title: "The problem today", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "steps", title: "How MagicCV does it (steps)", type: "array", of: [{ type: "featureRow" }] }),
    defineField({ name: "outcome", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "outcomeStats", title: "Outcome stats", type: "array", of: [{ type: "stat" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    defineField({ name: "related", title: "Related links", type: "array", of: [{ type: "relatedLink" }] }),
    defineField({ name: "seo", type: "seo", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "h1" } },
});

export const rolePage = defineType({
  name: "rolePage",
  title: "Role page (solutions / by role)",
  type: "document",
  fields: [
    defineField({ name: "h1", title: "H1", type: "string", validation: (r) => r.required() }),
    { ...slugField, options: { ...slugField.options, source: "h1" } },
    defineField({ name: "reader", title: "Reader (who this is for)", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "sub", title: "Sub-headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "pain", title: "Persona pain card", type: "personaPain", validation: (r) => r.required() }),
    defineField({ name: "featureRows", title: "Feature rows", type: "array", of: [{ type: "featureRow" }] }),
    defineField({ name: "stats", type: "array", of: [{ type: "stat" }] }),
    defineField({ name: "includeRoiTeaser", title: "Include ROI calculator", type: "boolean", initialValue: false }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    defineField({ name: "related", title: "Related links", type: "array", of: [{ type: "relatedLink" }] }),
    defineField({ name: "seo", type: "seo", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "h1", subtitle: "reader" } },
});

export const industryPage = defineType({
  name: "industryPage",
  title: "Industry page (solutions / by company type)",
  type: "document",
  fields: [
    defineField({ name: "h1", title: "H1", type: "string", validation: (r) => r.required() }),
    { ...slugField, options: { ...slugField.options, source: "h1" } },
    defineField({ name: "reader", title: "Reader (who this is for)", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "angle", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "sub", title: "Sub-headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "keyPoints", title: "Key points", type: "array", of: [{ type: "featureRow" }] }),
    defineField({ name: "stats", type: "array", of: [{ type: "stat" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    defineField({ name: "note", title: "Qualifying note (optional)", type: "text", rows: 2 }),
    defineField({ name: "related", title: "Related links", type: "array", of: [{ type: "relatedLink" }] }),
    defineField({ name: "seo", type: "seo", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "h1", subtitle: "reader" } },
});

export const comparisonPage = defineType({
  name: "comparisonPage",
  title: "Comparison page",
  type: "document",
  fields: [
    defineField({ name: "competitorName", title: "Competitor name", type: "string", validation: (r) => r.required() }),
    { ...slugField, options: { ...slugField.options, source: "competitorName" } },
    defineField({ name: "h1", title: "H1", type: "string", validation: (r) => r.required() }),
    defineField({ name: "sub", title: "Sub-headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({
      name: "whereCompetitorWins",
      title: "Where the competitor is strong",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whereMagicCvDiffers",
      title: "Where MagicCV is different",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "rows", title: "Comparison table rows", type: "array", of: [{ type: "comparisonRow" }] }),
    defineField({ name: "guidance", title: "Who should choose which", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    defineField({ name: "related", title: "Related links", type: "array", of: [{ type: "relatedLink" }] }),
    defineField({ name: "seo", type: "seo", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "competitorName", subtitle: "h1" } },
});

export const documentTypes = [blogPost, featurePage, useCasePage, rolePage, industryPage, comparisonPage];
