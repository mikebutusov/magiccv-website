"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/site";

const EUR_TO_USD = 1.08; // static reference rate, v1 only -- see dev notes

const currency = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function PricingTable() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className={clsx("text-sm font-medium", !annual ? "text-ink" : "text-muted")}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual((v) => !v)}
          className={clsx(
            "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            annual ? "bg-primary" : "bg-ink/20",
          )}
        >
          <span
            className={clsx(
              "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform",
              annual ? "translate-x-[22px]" : "translate-x-0.5",
            )}
          />
        </button>
        <span className={clsx("text-sm font-medium", annual ? "text-ink" : "text-muted")}>
          Annual <span className="text-primary">(save 20%)</span>
        </span>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {pricingTiers.map((tier) => {
          const price = annual ? tier.priceAnnualMonthly : tier.priceMonthly;
          return (
            <div
              key={tier.id}
              className={clsx(
                "flex flex-col rounded-3xl border p-6",
                tier.highlight ? "border-primary bg-primary-tint/40 ring-1 ring-primary" : "border-border bg-surface",
              )}
            >
              {tier.highlight && (
                <span className="mb-3 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-medium text-ink">{tier.name}</h3>
              <p className="mt-1 text-xs text-muted">{tier.firmSize}</p>
              <div className="mt-4">
                {price === null ? (
                  <p className="text-3xl font-medium text-ink">Custom</p>
                ) : (
                  <>
                    <p className="text-3xl font-medium text-ink">
                      {currency.format(price)}
                      <span className="text-base font-normal text-muted">/mo</span>
                    </p>
                    <p className="text-xs text-muted">≈ {usdFormatter.format(Math.round(price * EUR_TO_USD))}/mo</p>
                  </>
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
              <Button
                href={tier.cta.href}
                variant={tier.highlight ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {tier.cta.label}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
