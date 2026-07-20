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
    <section className="bg-grain relative overflow-hidden bg-primary py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-4xl font-semibold text-white md:text-5xl">{headline}</h2>
        <p className="max-w-xl text-lg text-primary-tint/80">{body}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="inverse">
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
