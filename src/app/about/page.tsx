import type { Metadata } from "next";
import Link from "next/link";
import { navigation, pages } from "@/lib/content";

const c = pages.about;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>{c.headline}</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container split">
          <div>
            {c.mainCopy.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={paragraph === c.mainCopy[0] ? "lead" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <div
            className="media-panel"
            data-label="Concept imagery"
            style={{
              ["--media-image" as string]:
                'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80")',
            }}
            role="img"
            aria-label="City streetscape representing connected places and everyday environments"
          />
        </div>
      </section>

      <section className="section section-fog">
        <div className="container grid-2">
          <article className="focus-item">
            <h2 style={{ fontSize: "1.5rem" }}>Mission</h2>
            <p>{c.mission}</p>
          </article>
          <article className="focus-item">
            <h2 style={{ fontSize: "1.5rem" }}>Vision</h2>
            <p>{c.vision}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "48rem" }}>
          <p className="eyebrow">Leadership</p>
          <h2 style={{ marginTop: "0.5rem" }}>{c.leadership.name}</h2>
          <p style={{ color: "var(--muted)", fontWeight: 650 }}>{c.leadership.title}</p>
          <p>{c.leadership.biography}</p>
          <Link href={navigation.primaryCta.href} className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
            {navigation.primaryCta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
