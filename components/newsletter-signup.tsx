"use client";

import { useId, useState } from "react";

/** UI + local success state only - see DemoForm for the CRM-wiring note. */
export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p role="status" className="text-sm text-primary">Thanks - check your inbox to confirm.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: replace with a POST to the CRM/newsletter provider once connected.
        setSubmitted(true);
      }}
      className={compact ? "flex gap-2" : "flex flex-col gap-3 sm:flex-row"}
    >
      <label htmlFor={id} className="sr-only">
        Work email
      </label>
      <input
        id={id}
        type="email"
        required
        placeholder="you@firm.com"
        className="form-input sm:max-w-xs"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-soft"
      >
        Subscribe
      </button>
    </form>
  );
}
