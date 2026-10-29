"use client";

import { FormEvent, useState } from "react";
import { company, interestOptions, pages } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const formCopy = pages.contact.form;

export function ContactForm({ deliveryConfigured }: { deliveryConfigured: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  if (!deliveryConfigured) {
    return (
      <div className="form-note" role="status">
        <p style={{ margin: "0 0 0.75rem" }}>{formCopy.unavailableMessage}</p>
        <p style={{ margin: "0 0 0.35rem" }}>
          Email{" "}
          <a href={`mailto:${company.email}`} style={{ color: "var(--teal)", fontWeight: 700 }}>
            {company.email}
          </a>
        </p>
        <p style={{ margin: 0 }}>
          Call{" "}
          <a href={`tel:${company.phoneTel}`} style={{ color: "var(--teal)", fontWeight: 700 }}>
            {company.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          message: data.get("message"),
          website: data.get("website"),
          marketingConsent: data.get("marketingConsent") === "on",
        }),
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-stack" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="company">
            Company or organization <span className="hint">(optional)</span>
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="hint">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">Area of interest</label>
        <select id="interest" name="interest" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>

      <div className="field" style={{ gridTemplateColumns: "auto 1fr", alignItems: "start" }}>
        <input
          id="marketingConsent"
          name="marketingConsent"
          type="checkbox"
          style={{ marginTop: "0.25rem" }}
        />
        <label htmlFor="marketingConsent" style={{ fontWeight: 500, color: "var(--slate)" }}>
          {formCopy.marketingConsentLabel}
        </label>
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "success" ? (
        <p className="form-success" role="status">
          {formCopy.successMessage}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-error" role="alert">
          {formCopy.errorMessage}
        </p>
      ) : null}

      <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : formCopy.submitLabel}
      </button>
    </form>
  );
}
