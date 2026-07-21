import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTASection({
  headline = "From RFP to tailored CV pack in 15 minutes.",
  body = "See it on your own scenario, or start a free 14-day trial today.",
  primaryCta = { label: "Start free trial", href: "/demo" },
  secondaryCta = { label: "Book a demo", href: "/demo" },
}: {
  headline?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center md:px-12">
          <div aria-hidden className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-center gap-5">
            <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">{headline}</h2>
            <p className="max-w-xl text-primary-tint/90">{body}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href={primaryCta.href} variant="inverse">
                {primaryCta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                variant="secondary"
                className="border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
