import type { Metadata } from "next";
import Link from "next/link";
import { floqmedia, pages } from "@/lib/content";

export const metadata: Metadata = {
  title: pages.floqmediaPage.seo.title,
  description: pages.floqmediaPage.seo.description,
};

export default function FloqMediaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Ventures</p>
          <h1>{floqmedia.displayName}</h1>
          <p className="lead">{floqmedia.descriptor}</p>
          <p className="status-badge">{floqmedia.status}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container split">
          <div>
            {floqmedia.descriptions.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p style={{ color: "var(--muted)" }}>{floqmedia.publicPhrase}.</p>
          </div>
          <div
            className="media-panel"
            data-label="Concept imagery"
            style={{
              ["--media-image" as string]:
                'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80")',
            }}
            role="img"
            aria-label="Interactive venue and event atmosphere concept imagery"
          />
        </div>
      </section>

      <section className="section section-fog">
        <div className="container">
          <h2 style={{ marginTop: 0 }}>Focus areas</h2>
          <ul className="list-check">
            {floqmedia.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          {floqmedia.platforms.map((platform) => (
            <article key={platform.name} className="focus-item">
              <p className="status-badge">{platform.status}</p>
              <h2 style={{ fontSize: "1.6rem" }}>{platform.name}</h2>
              <p>{platform.description}</p>
            </article>
          ))}
        </div>
        <div className="container" style={{ marginTop: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
            <Link href="/partnerships" className="btn btn-primary">
              Discuss a Partnership
            </Link>
            <Link href="/ventures" className="btn btn-outline">
              Back to Our Ventures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
