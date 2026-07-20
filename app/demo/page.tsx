import { CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { DemoForm } from "@/components/demo-form";
import { TestimonialBlock } from "@/components/testimonial-block";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a MagicCV demo",
  description: "See a live RFP-to-CV walkthrough on your own scenario. 30 minutes, no slides.",
  path: "/demo",
});

const EXPECTATIONS = [
  "We walk through your current proposal / CV process",
  "A live RFP-to-CV run on your own scenario",
  "Transparent pricing -- no surprises after the call",
];

export default function DemoPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-4xl font-medium text-ink md:text-5xl">
              See MagicCV on your own RFP.
            </h1>
            <p className="mt-4 max-w-measure text-lg text-ink-soft">
              30 minutes, no slides -- we&apos;ll run a live RFP-to-CV with your scenario.
            </p>
            <ul className="mt-8 space-y-3">
              {EXPECTATIONS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-lg border border-border bg-surface p-5">
              <p className="text-sm text-ink-soft">
                Prefer to just try it?{" "}
                <Link href="/pricing" className="font-semibold text-primary hover:text-primary-soft">
                  Start a free 14-day trial
                </Link>{" "}
                instead -- no credit card required.
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-muted">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                GDPR-ready, EU data residency
              </p>
            </div>
          </div>
          <DemoForm />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <TestimonialBlock />
      </Section>
    </>
  );
}
