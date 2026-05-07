"use client";

import { useId, useState } from "react";

const TOPICS = [
  "General enquiry",
  "Product enquiry / quote",
  "Technical support",
  "Distribution / partnership",
  "Training / academic",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const ids = {
    name: useId(),
    email: useId(),
    phone: useId(),
    organization: useId(),
    topic: useId(),
    message: useId(),
  };
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots fill hidden fields, real users don't.
    if ((formData.get("company_website") as string)?.length) {
      setState({ status: "success" });
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const topic = String(formData.get("topic") || "General enquiry").trim();

    const fieldErrors: Record<string, string> = {};
    if (!name) fieldErrors.name = "Please enter your name.";
    if (!email) fieldErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email))
      fieldErrors.email = "Please enter a valid email.";
    if (!message) fieldErrors.message = "Please enter a message.";
    else if (message.length < 10)
      fieldErrors.message = "Please write at least 10 characters.";

    if (Object.keys(fieldErrors).length > 0) {
      setState({
        status: "error",
        message: "Please fix the highlighted fields.",
        fieldErrors,
      });
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setState({
        status: "error",
        message:
          "Contact form is temporarily unavailable. Please email us directly at elvacoretechnologies@gmail.com.",
      });
      return;
    }

    setState({ status: "submitting" });

    // Build a clean payload (avoid sending the honeypot to Web3Forms)
    const payload = new FormData();
    payload.append("access_key", accessKey);
    payload.append("subject", `[Elvacore site] ${topic}`);
    payload.append("from_name", "Elvacore website");
    payload.append("replyto", email);
    payload.append("Name", name);
    payload.append("Email", email);
    payload.append(
      "Phone",
      String(formData.get("phone") || "").trim() || "—",
    );
    payload.append(
      "Organization",
      String(formData.get("organization") || "").trim() || "—",
    );
    payload.append("Topic", topic);
    payload.append("Message", message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };

      if (data.success) {
        setState({ status: "success" });
        form.reset();
      } else {
        setState({
          status: "error",
          message:
            data.message ||
            "Something went wrong sending your message. Please try again or email us directly.",
        });
      }
    } catch (err) {
      console.error("contact form submit failed", err);
      setState({
        status: "error",
        message:
          "We couldn't reach our mail service. Please try again in a few minutes.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-brand-900">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-2 text-ink-muted">
          We'll get back to you at the email you provided. For urgent matters,
          call{" "}
          <a className="text-brand-700 underline" href="tel:+919960664674">
            +91 99606 64674
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setState({ status: "idle" })}
          className="mt-4 inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-ink hover:bg-surface-muted"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
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

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-11 items-center justify-center rounded-md bg-brand-700 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
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
