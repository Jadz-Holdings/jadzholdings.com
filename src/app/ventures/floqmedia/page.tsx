import type { Metadata } from "next";
import Link from "next/link";
import { FloqMediaLogo } from "@/components/FloqMediaLogo";
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
          <h1 className="sr-only">{floqmedia.displayName}</h1>
          <div
            className="venture-logo-slot floqmedia-logo-wrap"
            style={{ margin: "0.85rem 0 0.75rem" }}
            aria-hidden="true"
          >
            <FloqMediaLogo fillSlot priority />
          </div>
          <p className="lead">{floqmedia.descriptor}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container split">
          <div>
            {floqmedia.descriptions.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p style={{ color: "var(--muted)" }}>{floqmedia.publicPhrase}.</p>
            <a
              href={floqmedia.externalUrl}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "0.5rem" }}
            >
              {floqmedia.exploreButton}
            </a>
          </div>
          <div
            className="media-panel"
            data-label="WindowAds concept"
            style={{
              ["--media-image" as string]:
                'url("/brand/floqmedia/WindowAds_Advertising_Beyond_the_Screen_Web.webp")',
            }}
            role="img"
            aria-label="WindowAds storefront concept imagery for FloqMedia"
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
              <h2 style={{ fontSize: "1.6rem" }}>{platform.name}</h2>
              <p>{platform.description}</p>
            </article>
          ))}
        </div>
        <div className="container" style={{ marginTop: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
            <a
              href={floqmedia.externalUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {floqmedia.exploreButton}
            </a>
            <Link href="/ventures" className="btn btn-outline">
              Back to Our Ventures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
