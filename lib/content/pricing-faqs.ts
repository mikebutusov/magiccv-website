import type { FaqItem } from "./types";

export const pricingFaqs: FaqItem[] = [
  {
    question: "How does billing work -- monthly or annual?",
    answer:
      "Both. Pay monthly, or prepay annually and save 20% -- shown as the monthly-equivalent price on this page.",
  },
  {
    question: "What currencies do you support?",
    answer:
      "EUR is the primary currency today, with a USD equivalent shown for reference. GBP and SEK are on the roadmap.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "14 days, no credit card required: one full RFP-to-CV run, with up to 10 imported consultant profiles.",
  },
  {
    question: "Do you offer discounts?",
    answer: "Annual prepay gets 20% off the monthly price. Talk to us for Scale and Enterprise volume terms.",
  },
  {
    question: "Where is our data stored?",
    answer:
      "See the Trust Center for the current, factual picture on EU data residency and data handling across plans.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Monthly plans can be cancelled anytime; all paid plans include a 30-day money-back guarantee.",
  },
];

export const pricingFeatureMatrix: {
  group: string;
  rows: { feature: string; starter: string; growth: string; scale: string; enterprise: string }[];
}[] = [
  {
    group: "Core workflow",
    rows: [
      { feature: "Consultant profiles", starter: "Up to 25", growth: "Up to 100", scale: "Unlimited", enterprise: "Unlimited" },
      { feature: "RFP-to-CV reasoning", starter: "--", growth: "✓", scale: "✓", enterprise: "✓" },
      { feature: "Proposal-ready CV packs", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
    ],
  },
  {
    group: "Branding & export",
    rows: [
      { feature: "Brand-consistent PDF/DOCX exports", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
      { feature: "Client/tender-specific templates", starter: "--", growth: "✓", scale: "✓", enterprise: "✓" },
      { feature: "White-label exports", starter: "--", growth: "--", scale: "--", enterprise: "✓" },
    ],
  },
  {
    group: "Languages",
    rows: [{ feature: "Supported languages", starter: "1 (EN)", growth: "5+ EU", scale: "5+ EU", enterprise: "5+ EU" }],
  },
  {
    group: "Anonymization",
    rows: [{ feature: "One-click anonymization", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" }],
  },
  {
    group: "Integrations",
    rows: [
      { feature: "HRIS integrations (roadmap)", starter: "--", growth: "--", scale: "✓", enterprise: "✓" },
      { feature: "Usage analytics & public pages", starter: "--", growth: "--", scale: "✓", enterprise: "✓" },
    ],
  },
  {
    group: "Security & compliance",
    rows: [
      { feature: "GDPR-by-design", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
      { feature: "EU data residency", starter: "✓", growth: "✓", scale: "✓", enterprise: "Guaranteed" },
      { feature: "SSO & role-based access", starter: "--", growth: "--", scale: "✓", enterprise: "✓" },
      { feature: "Procurement-grade contracts & DPA", starter: "--", growth: "--", scale: "--", enterprise: "✓" },
    ],
  },
  {
    group: "Support",
    rows: [
      { feature: "Support", starter: "Email", growth: "Priority", scale: "Dedicated onboarding", enterprise: "Custom SLA" },
    ],
  },
];
