"use client";

import { useId, useState } from "react";

const ROLE_OPTIONS = ["Bid/Proposal Manager", "Head of Ops/COO", "Managing Partner", "IT/Security", "Other"];
const FIRM_SIZE_OPTIONS = ["10-25", "25-100", "100-250", "250+"];
const USE_CASE_OPTIONS = [
  "Tailor CVs to every RFP",
  "Build a proposal-ready CV pack",
  "Centralize & standardize CVs",
  "Anonymize CVs",
  "Translate CVs into any language",
];

/**
 * UI + client-side validation only. Submission is a local no-op until a
 * CRM (HubSpot/Attio) is wired up -- see PRD §2.1. Swapping in a real
 * POST is a one-function change (see handleSubmit below).
 */
export function DemoForm() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [useCases, setUseCases] = useState<string[]>([]);

  function toggleUseCase(value: string) {
    setUseCases((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: replace with a POST to the CRM form handler once HubSpot/Attio is connected.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-surface p-8 text-center" role="status">
        <h3 className="text-xl font-medium text-ink">Thanks -- we&rsquo;ll be in touch shortly.</h3>
        <p className="mt-2 text-ink-soft">
          Prefer not to wait? You can also{" "}
          <a href="/demo" className="text-primary underline underline-offset-4">
            start a free trial
          </a>{" "}
          right now.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-surface p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor={`${formId}-name`}>
          <input id={`${formId}-name`} name="name" type="text" required className="form-input" />
        </Field>
        <Field label="Work email" htmlFor={`${formId}-email`}>
          <input id={`${formId}-email`} name="email" type="email" required className="form-input" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" htmlFor={`${formId}-company`}>
          <input id={`${formId}-company`} name="company" type="text" required className="form-input" />
        </Field>
        <Field label="Role" htmlFor={`${formId}-role`}>
          <select id={`${formId}-role`} name="role" required className="form-input" defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            {ROLE_OPTIONS.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Firm size" htmlFor={`${formId}-firm-size`}>
        <select id={`${formId}-firm-size`} name="firmSize" required className="form-input" defaultValue="">
          <option value="" disabled>
            Select firm size
          </option>
          {FIRM_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size} employees
            </option>
          ))}
        </select>
      </Field>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">Primary use case</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {USE_CASE_OPTIONS.map((useCase) => (
            <label key={useCase} className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                name="useCases"
                value={useCase}
                checked={useCases.includes(useCase)}
                onChange={() => toggleUseCase(useCase)}
                className="h-4 w-4 rounded border-border text-primary focus-visible:outline-2 focus-visible:outline-accent"
              />
              {useCase}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Message (optional)" htmlFor={`${formId}-message`}>
        <textarea id={`${formId}-message`} name="message" rows={3} className="form-input" />
      </Field>
      <button
        type="submit"
        className="w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Submit demo request
      </button>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
