"use client";

import { useId, useMemo, useState } from "react";
import { pricingTiers } from "@/lib/site";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function ROICalculator({ title = "What is the status quo costing you?" }: { title?: string }) {
  const id = useId();
  const [proposalsPerMonth, setProposalsPerMonth] = useState(10);
  const [hoursPerPack, setHoursPerPack] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(60);

  const proPlan = pricingTiers.find((t) => t.id === "pro")!;

  const { monthlyCost, annualCost, planMultiple } = useMemo(() => {
    const monthly = proposalsPerMonth * hoursPerPack * hourlyCost;
    return {
      monthlyCost: monthly,
      annualCost: monthly * 12,
      planMultiple: monthly / (proPlan.priceMonthly || 1),
    };
  }, [proposalsPerMonth, hoursPerPack, hourlyCost, proPlan.priceMonthly]);

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
      <h2 className="text-xl font-medium text-ink">{title}</h2>
      <p className="mt-2 max-w-measure text-sm text-ink-soft">
        Estimate the hidden hours-per-week cost of manually chasing and reformatting CVs for every proposal.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <RangeField
          id={`${id}-proposals`}
          label="Proposals per month"
          unit="proposals per month"
          value={proposalsPerMonth}
          min={1}
          max={40}
          onChange={setProposalsPerMonth}
        />
        <RangeField
          id={`${id}-hours`}
          label="Hours per CV pack"
          unit="hours"
          value={hoursPerPack}
          min={0.5}
          max={12}
          step={0.5}
          onChange={setHoursPerPack}
        />
        <RangeField
          id={`${id}-rate`}
          label="Hourly cost (USD)"
          unit="US dollars per hour"
          value={hourlyCost}
          min={20}
          max={200}
          step={5}
          onChange={setHourlyCost}
        />
      </div>
      <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3" aria-live="polite">
        <Output label="Monthly hidden cost" value={currency.format(monthlyCost)} />
        <Output label="Annual hidden cost" value={currency.format(annualCost)} />
        <Output
          label={`vs MagicCV ${proPlan.name} plan`}
          value={`${planMultiple.toFixed(1)}x`}
          hint={`${proPlan.name} is ${currency.format(proPlan.priceMonthly ?? 0)}/mo`}
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
  unit,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex flex-col">
      {/* Fixed-height label row so sliders align even when a label wraps. */}
      <label
        htmlFor={id}
        className="flex min-h-10 items-start justify-between gap-3 text-sm font-medium text-ink"
      >
        <span>{label}</span>
        <span className="shrink-0 rounded-md bg-primary-tint px-2 py-0.5 font-semibold tabular-nums text-primary">
          {value}
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={unit ? `${value} ${unit}` : undefined}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-primary"
      />
    </div>
  );
}

function Output({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="flex flex-col">
      {/* Matching min-height keeps the big values on one baseline across columns. */}
      <p className="min-h-10 text-sm text-muted sm:min-h-10">{label}</p>
      <p className="font-display text-2xl font-medium whitespace-nowrap text-primary">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}
