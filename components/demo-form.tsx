"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";
import type { DemoFormStrings } from "@/lib/i18n-pages";

const EN_STRINGS: DemoFormStrings = {
  fullName: "Full name",
  workEmail: "Work email",
  company: "Company",
  role: "Role",
  selectRole: "Select a role",
  roleOptions: ["Bid/Proposal Manager", "Head of Ops/COO", "Managing Partner", "IT/Security", "Other"],
  firmSize: "Firm size",
  selectFirmSize: "Select firm size",
  employees: "employees",
  useCaseLegend: "Primary use case",
  useCaseOptions: [
    "Tailor CVs to every brief",
    "Build a proposal-ready CV pack",
    "Centralize & standardize CVs",
    "Anonymize CVs",
    "Translate CVs into any language",
  ],
  message: "Message (optional)",
  submit: "Submit demo request",
  thanksTitle: "Thanks - we'll be in touch shortly.",
  thanksPre: "Prefer not to wait? You can also ",
  thanksLink: "get started free",
  thanksPost: " right now.",
};

const FIRM_SIZE_OPTIONS = ["10-25", "25-100", "100-250", "250+"];

/**
 * UI + client-side validation only. Submission is a local no-op until a
 * CRM (HubSpot/Attio) is wired up - see PRD §2.1. Swapping in a real
 * POST is a one-function change (see handleSubmit below).
 */
export function DemoForm({ strings = EN_STRINGS }: { strings?: DemoFormStrings }) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [useCases, setUseCases] = useState<string[]>([]);
  const s = strings;

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
      <div className="rounded-2xl border border-border bg-surface p-8 text-center" role="status">
        <h3 className="text-xl font-medium text-ink">{s.thanksTitle}</h3>
        <p className="mt-2 text-ink-soft">
          {s.thanksPre}
          <a href={site.signUpUrl} className="text-primary underline underline-offset-4">
            {s.thanksLink}
          </a>
          {s.thanksPost}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={s.fullName} htmlFor={`${formId}-name`}>
          <input id={`${formId}-name`} name="name" type="text" required className="form-input" />
        </Field>
        <Field label={s.workEmail} htmlFor={`${formId}-email`}>
          <input id={`${formId}-email`} name="email" type="email" required className="form-input" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={s.company} htmlFor={`${formId}-company`}>
          <input id={`${formId}-company`} name="company" type="text" required className="form-input" />
        </Field>
        <Field label={s.role} htmlFor={`${formId}-role`}>
          <select id={`${formId}-role`} name="role" required className="form-input" defaultValue="">
            <option value="" disabled>
              {s.selectRole}
            </option>
            {s.roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label={s.firmSize} htmlFor={`${formId}-firm-size`}>
        <select id={`${formId}-firm-size`} name="firmSize" required className="form-input" defaultValue="">
          <option value="" disabled>
            {s.selectFirmSize}
          </option>
          {FIRM_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size} {s.employees}
            </option>
          ))}
        </select>
      </Field>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">{s.useCaseLegend}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {s.useCaseOptions.map((useCase) => (
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
      <Field label={s.message} htmlFor={`${formId}-message`}>
        <textarea id={`${formId}-message`} name="message" rows={3} className="form-input" />
      </Field>
      <button
        type="submit"
        className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {s.submit}
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
