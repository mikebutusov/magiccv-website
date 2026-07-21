import { Check } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/site";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function PricingTable() {
  return (
    <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.id}
          className={clsx(
            "flex flex-col rounded-3xl border p-6 text-left",
            tier.highlight ? "border-primary bg-primary-tint/40 ring-1 ring-primary" : "border-border bg-surface",
          )}
        >
          {tier.highlight && (
            <span className="mb-3 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              Most popular
            </span>
          )}
          <h3 className="text-lg font-medium text-ink">{tier.name}</h3>
          <p className="mt-1 text-xs text-muted">{tier.limits}</p>
          <div className="mt-4">
            {tier.priceMonthly === null ? (
              <p className="text-3xl font-medium text-ink">Custom</p>
            ) : (
              <p className="text-3xl font-medium text-ink">
                {usd.format(tier.priceMonthly)}
                {tier.priceMonthly > 0 && <span className="text-base font-normal text-muted">/mo</span>}
              </p>
            )}
          </div>
          <p className="mt-3 text-sm text-ink-soft">{tier.anchorValue}</p>
          <ul className="mt-5 flex-1 space-y-2">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
          <Button href={tier.cta.href} variant={tier.highlight ? "primary" : "secondary"} className="mt-6 w-full">
            {tier.cta.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
