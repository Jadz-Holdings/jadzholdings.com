import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Jadz Holdings website covering informational content and venture development status.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Terms</h1>
          <p className="lead">
            These terms apply to your use of the Jadz Holdings website. They are drafted for review
            based on the current public marketing site and may be updated as the configuration changes.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "46rem", display: "grid", gap: "1.25rem" }}>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>Informational purpose</h2>
            <p>
              This website provides general information about {site.legalName}, its developing
              ventures, and ways to contact the company. It is not an offer of investment advice,
              securities, or financial advisory services.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>Development status</h2>
            <p>
              Ventures and capabilities described on this website may be in development. Availability
              varies by venture and rollout stage. Product mockups, if shown, are concepts unless
              expressly stated otherwise.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>No warranties</h2>
            <p>
              Content is provided for general informational purposes. {site.legalName} does not make
              warranties about completeness, uninterrupted availability, or fitness for a particular
              purpose through this marketing site alone.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>Contact</h2>
            <p>
              Questions about these terms may be sent to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>
            These terms do not invent certifications or contractual commitments beyond the website’s
            informational use. Have counsel review them before publication as binding terms.
          </p>
          <Link href="/contact" className="btn btn-outline" style={{ width: "fit-content" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
