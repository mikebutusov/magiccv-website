import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTASection({
  headline = "From scattered CVs to a polished, on-brand pack in minutes.",
  body = "See it on your own consultants, or start free today - no credit card.",
  primaryCta = { label: "Get started free", href: "https://getmagic.cv/sign-up" },
  secondaryCta = { label: "Book a demo", href: "/demo" },
  trustLine = "GDPR by design · EU data residency · Free plan, no credit card",
}: {
  headline?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
}) {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center md:px-12">
          <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black,transparent)]" />
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
            <p className="mt-3 text-sm text-primary-tint/90">{trustLine}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
