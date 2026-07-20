"use client";

import { useId, useMemo, useState } from "react";
import { pricingTiers } from "@/lib/site";

const currency = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function ROICalculator({ title = "What is the status quo costing you?" }: { title?: string }) {
  const id = useId();
  const [proposalsPerMonth, setProposalsPerMonth] = useState(10);
  const [hoursPerPack, setHoursPerPack] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(60);

  const growthPlan = pricingTiers.find((t) => t.id === "growth")!;

  const { monthlyCost, annualCost, planMultiple } = useMemo(() => {
    const monthly = proposalsPerMonth * hoursPerPack * hourlyCost;
    return {
      monthlyCost: monthly,
      annualCost: monthly * 12,
      planMultiple: monthly / growthPlan.priceMonthly,
    };
  }, [proposalsPerMonth, hoursPerPack, hourlyCost, growthPlan.priceMonthly]);

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
      <h3 className="text-xl font-medium text-ink">{title}</h3>
      <p className="mt-2 max-w-measure text-sm text-ink-soft">
        Estimate the hidden hours-per-week cost of manually chasing and reformatting CVs for every proposal.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <RangeField
          id={`${id}-proposals`}
          label="Proposals per month"
          value={proposalsPerMonth}
          min={1}
          max={40}
          onChange={setProposalsPerMonth}
        />
        <RangeField
          id={`${id}-hours`}
          label="Hours per CV pack"
          value={hoursPerPack}
          min={0.5}
          max={12}
          step={0.5}
          onChange={setHoursPerPack}
        />
        <RangeField
          id={`${id}-rate`}
          label="Hourly cost (EUR)"
          value={hourlyCost}
          min={20}
          max={200}
          step={5}
          onChange={setHourlyCost}
        />
      </div>
      <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
        <Output label="Monthly hidden cost" value={currency.format(monthlyCost)} />
        <Output label="Annual hidden cost" value={currency.format(annualCost)} />
        <Output
          label={`vs MagicCV ${growthPlan.name} plan`}
          value={`${planMultiple.toFixed(1)}x`}
          hint={`${growthPlan.name} is ${currency.format(growthPlan.priceMonthly)}/mo`}
        />
      </div>
    </div>
  );
}

function RangeField({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-ink">
        <span>{label}</span>
        <span className="text-primary">{value}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-primary"
      />
    </div>
  );
}

function Output({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <p className="font-display text-2xl font-medium text-primary">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}
