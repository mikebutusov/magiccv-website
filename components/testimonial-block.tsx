import { Container } from "@/components/ui/container";
import { Avatar } from "@/components/product-shots/browser-frame";

/**
 * SAMPLE DATA - fictional quotes, people, and firms (not real customers or
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

export interface TestimonialOverride {
  quote: string;
  name: string;
  role: string;
  firm: string;
  initials: string;
}

/** Three-quote grid for the homepage - same fictional sample data as above. */
export function TestimonialGrid({ title, subtitle }: { title: string; subtitle?: string }) {
  const items = SAMPLE_TESTIMONIALS.slice(0, 3);
  return (
    <Container>
      <h2 className="text-3xl font-medium text-ink">{title}</h2>
      {subtitle && <p className="mt-3 max-w-measure text-lg text-ink-soft">{subtitle}</p>}
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-surface p-7">
            <blockquote className="flex-1 text-[1.05rem] leading-normal font-medium text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Avatar initials={t.initials} className="h-10 w-10 text-xs" />
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted">
                  {t.role} · {t.firm}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}

export function TestimonialBlock({
  context = "default",
  override,
}: {
  context?: string;
  override?: TestimonialOverride;
}) {
  const t = override ?? pick(context);
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
