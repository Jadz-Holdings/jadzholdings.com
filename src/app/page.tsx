import type { Metadata } from "next";
import Link from "next/link";
import { pages, spaavs, floqmedia } from "@/lib/content";

const c = pages.home;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
};

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="container hero-content">
          <p className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.8)" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1">{c.hero.headline}</h1>
          <p className="reveal reveal-delay-2">{c.hero.paragraph}</p>
          <div
            className="reveal reveal-delay-3"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "1.75rem" }}
          >
            <Link href={c.hero.primaryButton.href} className="btn btn-primary">
              {c.hero.primaryButton.label}
            </Link>
            <Link href={c.hero.secondaryButton.href} className="btn btn-secondary">
              {c.hero.secondaryButton.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="lead" style={{ margin: 0, maxWidth: "40rem" }}>
            {c.supportingStatement}
          </p>
        </div>
      </section>

      <section className="section section-fog">
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", maxWidth: "18ch", marginTop: 0 }}>
            {c.foundation.headline}
          </h2>
          <p className="lead">{c.foundation.body}</p>

          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            {c.foundation.cards.map((card) => (
              <article key={card.title} className="focus-item">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginTop: 0 }}>
            {c.portfolioPreview.headline}
          </h2>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            <article className="venture-card spaavs-theme">
              <p className="status-badge spaavs">{spaavs.status}</p>
              <p className="spaavs-wordmark" aria-label={spaavs.a11yName} style={{ margin: "0.75rem 0" }}>
                {spaavs.wordmark}
              </p>
              <p style={{ color: "var(--muted)", margin: "0 0 0.75rem" }}>{spaavs.descriptor}</p>
              <p style={{ marginBottom: "1.25rem" }}>{spaavs.tagline}</p>
              <Link href={spaavs.href} className="btn btn-spaavs">
                {spaavs.exploreButton}
              </Link>
            </article>

            <article className="venture-card">
              <p className="status-badge">{floqmedia.status}</p>
              <h3 style={{ marginTop: "0.75rem" }}>{floqmedia.displayName}</h3>
              <p style={{ marginBottom: "1.25rem" }}>{floqmedia.descriptor}</p>
              <Link href={floqmedia.href} className="btn btn-outline">
                {floqmedia.exploreButton}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginTop: 0, maxWidth: "16ch" }}>
            {c.closing.headline}
          </h2>
          <p style={{ maxWidth: "40rem", color: "rgba(255,255,255,0.82)", fontSize: "1.1rem" }}>
            {c.closing.paragraph}
          </p>
          <Link href={c.closing.button.href} className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
            {c.closing.button.label}
          </Link>
        </div>
      </section>
    </>
  );
}
