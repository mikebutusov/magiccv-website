import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import type { PersonaPain } from "@/lib/content/types";

export function PersonaPainCard({ pain }: { pain: PersonaPain }) {
  return (
    <Container>
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
        <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl">
          &ldquo;{pain.quote}&rdquo;
        </blockquote>
        <p className="mt-5 max-w-measure text-lg text-primary">{pain.answer}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {pain.proofPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>
                <PlaceholderText text={point} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
