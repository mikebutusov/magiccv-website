import { Container } from "@/components/ui/container";
import { Avatar } from "@/components/product-shots/browser-frame";

/**
 * SAMPLE DATA -- fictional quotes, people, and firms (not real customers or
 * real individuals). Placeholder social proof to be replaced with real
 * design-partner testimonials before the site is promoted.
 */
const SAMPLE_TESTIMONIALS = [
  {
    quote:
      "We used to lose a full afternoon per bid just assembling CVs. Now the pack is ready before the kickoff call — and it actually reads like one firm.",
    name: "Elke Bakker",
    role: "Bid Manager",
    firm: "Nordhaus Advisory",
    initials: "EB",
  },
  {
    quote:
      "The RFP-to-CV reasoning is the part that surprised me. It surfaces the exact projects that match the brief instead of a generic profile dump.",
    name: "Tomas Lindqvist",
    role: "Head of Delivery",
    firm: "Lindqvist & Co",
    initials: "TL",
  },
  {
    quote:
      "Anonymized, multilingual CV packs for public tenders used to take days. We turn them around the same morning now.",
    name: "Camille Roux",
    role: "Proposal Lead",
    firm: "Meridian Consulting",
    initials: "CR",
  },
  {
    quote:
      "Our consultant profiles are finally in one place and always current. Resourcing a bid is a search now, not a scavenger hunt.",
    name: "Jonas Keller",
    role: "Resourcing Manager",
    firm: "Kessler Partners",
    initials: "JK",
  },
];

function pick(context: string) {
  const sum = [...context].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return SAMPLE_TESTIMONIALS[sum % SAMPLE_TESTIMONIALS.length];
}

export function TestimonialBlock({ context = "default" }: { context?: string }) {
  const t = pick(context);
  return (
    <Container>
      <figure className="rounded-3xl border border-border bg-surface p-8 md:p-10">
        <blockquote className="max-w-3xl text-2xl leading-snug font-medium text-ink md:text-[1.75rem]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <Avatar initials={t.initials} className="h-11 w-11 text-sm" />
          <div>
            <p className="text-sm font-semibold text-ink">{t.name}</p>
            <p className="text-sm text-muted">
              {t.role} · {t.firm}
            </p>
          </div>
        </figcaption>
      </figure>
    </Container>
  );
}
