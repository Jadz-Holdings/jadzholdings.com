import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for the Jadz Holdings website, including how contact inquiries are handled.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy</h1>
          <p className="lead">
            This page describes how the Jadz Holdings website handles information you choose to share
            with us. It is provided for review and may be updated as the website configuration changes.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "46rem", display: "grid", gap: "1.25rem" }}>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>Information we collect</h2>
            <p>
              If you contact us by email, telephone, or through the website inquiry form (when
              available), we receive the information you provide — such as your name, email address,
              organization, phone number, area of interest, and message.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>How we use information</h2>
            <p>
              We use inquiry information to respond to your message and to evaluate partnership or
              business opportunities you describe. Optional marketing consent, when offered, is kept
              separate from your inquiry and is not required to contact us.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>Cookies and analytics</h2>
            <p>
              This marketing website is configured to operate without requiring account creation.
              Additional tracking, analytics, or advertising technologies will be disclosed here if
              they are added to the live site configuration.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem" }}>Contact</h2>
            <p>
              For privacy questions about this website, email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or write to {site.legalName} at{" "}
              {site.addressInline}.
            </p>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>
            This notice does not invent certifications, retention periods, or contractual commitments.
            Review and update it before relying on it for compliance purposes.
          </p>
          <Link href="/contact" className="btn btn-outline" style={{ width: "fit-content" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
