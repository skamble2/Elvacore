"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage, type ContactFormState } from "./actions";

const TOPICS = [
  "General enquiry",
  "Product enquiry / quote",
  "Technical support",
  "Distribution / partnership",
  "Training / academic",
  "Other",
];

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};
  const ids = {
    name: useId(),
    email: useId(),
    phone: useId(),
    organization: useId(),
    topic: useId(),
    message: useId(),
  };

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-brand-900">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-2 text-ink-muted">
          We'll get back to you at the email you provided. For urgent matters,
          call <a className="text-brand-700 underline" href="tel:+919960664674">+91 99606 64674</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 sm:p-8"
      noValidate
    >
      <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
        Send us a message
      </h2>
      <p className="-mt-2 text-sm text-ink-muted">
        Fields marked <span className="text-accent-600">*</span> are required.
      </p>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-md border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700"
        >
          {state.message}
        </p>
      )}

      {/* Honeypot — hidden from users, attractive to bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={ids.name}
          name="name"
          label="Name"
          required
          error={errors.name}
        />
        <Field
          id={ids.email}
          name="email"
          type="email"
          label="Email"
          required
          error={errors.email}
        />
        <Field id={ids.phone} name="phone" label="Phone" type="tel" />
        <Field id={ids.organization} name="organization" label="Organization" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.topic} className="text-sm font-medium text-ink">
          Topic
        </label>
        <select
          id={ids.topic}
          name="topic"
          defaultValue={TOPICS[0]}
          className="h-11 rounded-md border border-border bg-surface px-3 text-sm text-ink"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.message} className="text-sm font-medium text-ink">
          Message <span className="text-accent-600">*</span>
        </label>
        <textarea
          id={ids.message}
          name="message"
          required
          rows={6}
          className={`rounded-md border bg-surface px-3 py-2 text-sm text-ink ${
            errors.message ? "border-accent-500" : "border-border"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-accent-700">{errors.message}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-accent-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className={`h-11 rounded-md border bg-surface px-3 text-sm text-ink ${
          error ? "border-accent-500" : "border-border"
        }`}
      />
      {error && <p className="text-xs text-accent-700">{error}</p>}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-11 items-center justify-center rounded-md bg-brand-700 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}
