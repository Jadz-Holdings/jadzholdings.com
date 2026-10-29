import type { Metadata } from "next";
import Link from "next/link";
import { damme, floqmedia, pages, spaavs, topvr } from "@/lib/content";

const c = pages.venturesIndex;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
};

export default function VenturesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Ventures</p>
          <h1>{c.headline}</h1>
          <p className="lead">{c.introduction}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <article className="venture-card spaavs-theme" style={{ paddingTop: "1.75rem" }}>
            <div className="split">
              <div>
                <p className="status-badge spaavs">{spaavs.status}</p>
                <p className="spaavs-wordmark" aria-label={spaavs.a11yName} style={{ margin: "0.6rem 0" }}>
                  {spaavs.wordmark}
                </p>
                <p style={{ color: "var(--muted)", fontWeight: 650, marginTop: 0 }}>
                  {spaavs.descriptor}
                </p>
                <p style={{ fontSize: "1.15rem", fontWeight: 650, color: "var(--navy)" }}>
                  {spaavs.tagline}
                </p>
                {spaavs.descriptions.slice(0, 2).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                <Link href={spaavs.href} className="btn btn-spaavs">
                  {spaavs.exploreButton}
                </Link>
              </div>
              <div
                className="media-panel"
                data-label="Concept imagery"
                style={{
                  ["--media-image" as string]:
                    'url("https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=80")',
                }}
                role="img"
                aria-label="Parking facility concept imagery for SPAAVS"
              />
            </div>
          </article>

          <article className="venture-card" style={{ paddingTop: "1.75rem" }}>
            <div className="split">
              <div>
                <p className="status-badge">{floqmedia.status}</p>
                <h2 style={{ margin: "0.6rem 0", fontSize: "2rem" }}>{floqmedia.displayName}</h2>
                <p style={{ color: "var(--muted)", fontWeight: 650 }}>{floqmedia.descriptor}</p>
                {floqmedia.descriptions.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                <Link href={floqmedia.href} className="btn btn-outline">
                  {floqmedia.exploreButton}
                </Link>
              </div>
              <div
                className="media-panel"
                data-label="Concept imagery"
                style={{
                  ["--media-image" as string]:
                    'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80")',
                }}
                role="img"
                aria-label="Venue atmosphere concept imagery for FloqMedia"
              />
            </div>
          </article>

          <div className="grid-2">
            <article className="venture-card">
              <p className="status-badge">{damme.status}</p>
              <h2 style={{ margin: "0.6rem 0 0.75rem", fontSize: "1.75rem" }}>{damme.displayName}</h2>
              <p>{damme.descriptor}</p>
            </article>
            <article className="venture-card">
              <p className="status-badge">{topvr.status}</p>
              <h2 style={{ margin: "0.6rem 0 0.75rem", fontSize: "1.75rem" }}>{topvr.displayName}</h2>
              <p>{topvr.descriptor}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
