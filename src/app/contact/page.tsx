import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactFormSection } from "@/components/ContactFormSection";
import { company, pages } from "@/lib/content";

const c = pages.contact;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>{c.headline}</h1>
          <p className="lead">{c.introduction}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container split">
          <div className="contact-panel">
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Business Mailing Address</dt>
                <dd>
                  {company.mailingAddress.lines.map((line) => (
                    <span key={line} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <p style={{ marginTop: "1.5rem", color: "var(--muted)", fontSize: "0.92rem" }}>
              {company.mailingAddress.note}
            </p>
          </div>

          <div>
            <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>{c.form.title}</h2>
            <Suspense fallback={<div className="form-note">Loading contact options…</div>}>
              <ContactFormSection />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
