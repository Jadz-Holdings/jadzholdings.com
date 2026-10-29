import type { Metadata } from "next";
import Link from "next/link";
import { pages, spaavs } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.spaavsPage.seo.title,
  description: pages.spaavsPage.seo.description,
};

export default function SpaavsPage() {
  return (
    <div className="spaavs-theme">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Ventures</p>
          <p className="spaavs-wordmark" aria-label={spaavs.a11yName} style={{ margin: "0.85rem 0 0.4rem" }}>
            {spaavs.wordmark}
          </p>
          <p style={{ color: "var(--muted)", fontWeight: 650, margin: 0 }}>{spaavs.descriptor}</p>
          <h1 style={{ maxWidth: "18ch", marginTop: "0.85rem" }}>{spaavs.tagline}</h1>
          <p className="status-badge spaavs">{spaavs.status}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container split">
          <div>
            {spaavs.descriptions.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              {spaavs.developmentDisclaimer}
            </p>
          </div>
          <div
            className="media-panel"
            data-label="Concept imagery"
            style={{
              ["--media-image" as string]:
                'url("https://images.unsplash.com/photo-1573348722427-f1d8742aaf5d?auto=format&fit=crop&w=1600&q=80")',
            }}
            role="img"
            aria-label="Urban parking structure concept imagery"
          />
        </div>
      </section>

      <section className="section section-fog">
        <div className="container">
          <h2 style={{ marginTop: 0 }}>Focus areas</h2>
          <ul className="list-check">
            {spaavs.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginTop: 0 }}>Partnership model</h2>
          <p style={{ maxWidth: "42rem" }}>{spaavs.partnershipModel}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "1.25rem" }}>
            <Link href="/partnerships" className="btn btn-spaavs">
              Discuss a Partnership
            </Link>
            <Link href="/ventures" className="btn btn-outline">
              Back to Our Ventures
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
