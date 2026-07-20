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
      <h2 className="text-2xl font-medium text-ink">{title}</h2>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-surface">
        {faqs.map((faq, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none">
              {faq.question}
              <span
                className="shrink-0 text-xl leading-none text-primary transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-measure text-ink-soft">{faq.answer}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
