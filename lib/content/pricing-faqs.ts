import type { FaqItem } from "./types";

export const pricingFaqs: FaqItem[] = [
  {
    question: "Is the Free plan a trial?",
    answer:
      "No -- it's a real free plan with no clock. You get 10 candidate profiles and 30 CVs in total to run the full workflow on your own team, no credit card required.",
  },
  {
    question: "Are the Free plan limits monthly?",
    answer:
      "No, they're totals: 10 candidate profiles and 30 generated CVs overall. Pro raises that to 200 profiles and 600 CVs.",
  },
  {
    question: "What currency do you charge in?",
    answer: "USD. Pro is $50 per month; Enterprise is custom-quoted.",
  },
  {
    question: "What's in Enterprise?",
    answer:
      "Unlimited profiles and CVs, SSO and role-based access, EU data residency guarantees, DPA and custom contracts, plus dedicated onboarding and SLAs. Talk to us for a quote.",
  },
  {
    question: "Where is our data stored?",
    answer:
      "See the Trust Center for the current, factual picture on EU data residency and data handling across plans.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Pro is month-to-month -- cancel anytime. And the Free plan never expires.",
  },
];

export const pricingFeatureMatrix: {
  group: string;
  rows: { feature: string; free: string; pro: string; enterprise: string }[];
}[] = [
  {
    group: "Limits",
    rows: [
      { feature: "Candidate profiles", free: "10 (total)", pro: "200", enterprise: "Unlimited" },
      { feature: "Generated CVs", free: "30 (total)", pro: "600", enterprise: "Unlimited" },
    ],
  },
  {
    group: "Core workflow",
    rows: [
      { feature: "AI CV generation & chat editing", free: "✓", pro: "✓", enterprise: "✓" },
      { feature: "Tailoring to a brief or RFP", free: "✓", pro: "✓", enterprise: "✓" },
      { feature: "Centralized profile search & tags", free: "--", pro: "✓", enterprise: "✓" },
    ],
  },
  {
    group: "Branding & export",
    rows: [
      { feature: "Brand templates & PDF export", free: "✓", pro: "✓", enterprise: "✓" },
      { feature: "Client/tender-specific templates", free: "--", pro: "✓", enterprise: "✓" },
      { feature: "White-label exports", free: "--", pro: "--", enterprise: "✓" },
    ],
  },
  {
    group: "Languages & anonymization",
    rows: [
      { feature: "Multilingual output (5+ EU languages)", free: "--", pro: "✓", enterprise: "✓" },
      { feature: "One-click anonymization", free: "--", pro: "✓", enterprise: "✓" },
    ],
  },
  {
    group: "Security & compliance",
    rows: [
      { feature: "GDPR-by-design", free: "✓", pro: "✓", enterprise: "✓" },
      { feature: "SSO & role-based access", free: "--", pro: "--", enterprise: "✓" },
      { feature: "EU data residency guarantees", free: "--", pro: "--", enterprise: "✓" },
      { feature: "DPA & custom contracts", free: "--", pro: "--", enterprise: "✓" },
    ],
  },
  {
    group: "Support",
    rows: [
      { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated onboarding + SLA" },
    ],
  },
];
