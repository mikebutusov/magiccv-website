import { defineField, defineType } from "sanity";

/** Shared object types reused across documents. Field names mirror
 *  lib/content/types.ts so the fetch-mapping layer stays trivial. */

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required().max(70) }),
    defineField({ name: "description", type: "text", rows: 3, validation: (r) => r.required().max(200) }),
    defineField({ name: "keywords", type: "array", of: [{ type: "string" }] }),
  ],
});

export const relatedLink = defineType({
  name: "relatedLink",
  title: "Related link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "text", rows: 4, validation: (r) => r.required() }),
  ],
  preview: { select: { title: "question" } },
});

export const featureRow = defineType({
  name: "featureRow",
  title: "Feature row",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "screenshotAlt",
      title: "Screenshot description (placeholder label)",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "title" } },
});

export const stat = defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  fields: [
    defineField({ name: "value", type: "string", validation: (r) => r.required() }),
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "isPlaceholder",
      title: "Is placeholder value",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: { select: { title: "value", subtitle: "label" } },
});

export const personaPain = defineType({
  name: "personaPain",
  title: "Persona pain",
  type: "object",
  fields: [
    defineField({ name: "quote", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "answer", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({
      name: "proofPoints",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.min(1),
    }),
  ],
});

export const comparisonRow = defineType({
  name: "comparisonRow",
  title: "Comparison row",
  type: "object",
  fields: [
    defineField({ name: "category", type: "string", validation: (r) => r.required() }),
    defineField({ name: "magiccv", title: "MagicCV", type: "string", validation: (r) => r.required() }),
    defineField({ name: "competitor", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "category" } },
});

export const objectTypes = [seo, relatedLink, faqItem, featureRow, stat, personaPain, comparisonRow];
