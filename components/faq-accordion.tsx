import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { FaqItem } from "@/lib/content/types";

export function FAQAccordion({ faqs, title = "Frequently asked questions" }: { faqs: FaqItem[]; title?: string }) {
  if (faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span
            aria-hidden
            className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-tint text-lg font-bold text-primary"
          >
            ?
          </span>
          <h2 className="text-3xl font-medium text-ink">{title}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-surface transition-colors open:border-primary/30 open:shadow-[0_12px_32px_-20px_rgba(90,75,216,0.35)] hover:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-ink marker:content-none">
                {faq.question}
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary transition-transform group-open:rotate-180"
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <p className="max-w-measure px-5 pb-5 text-ink-soft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
