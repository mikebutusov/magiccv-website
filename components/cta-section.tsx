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
    <section className="bg-primary py-16 md:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-medium text-white md:text-4xl">{headline}</h2>
        <p className="max-w-xl text-primary-tint/90">{body}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant="secondary"
            className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
