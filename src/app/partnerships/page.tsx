import type { Metadata } from "next";
import Link from "next/link";
import { company, pages } from "@/lib/content";

const c = pages.partnerships;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
};

export default function PartnershipsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Partnerships</p>
          <h1>{c.headline}</h1>
          <p className="lead">{c.introduction}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          {c.categories.map((category) => (
            <article key={category.title} className="partner-item">
              <h2 style={{ fontSize: "1.45rem", margin: "0 0 0.55rem" }}>{category.title}</h2>
              <p>{category.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <h2 style={{ marginTop: 0, maxWidth: "20ch" }}>{c.closing.copy}</h2>
          <Link href={c.closing.button.href} className="btn btn-primary">
            {c.closing.button.label}
          </Link>
          <p style={{ marginTop: "1.25rem", color: "rgba(255,255,255,0.8)" }}>
            Email{" "}
            <a href={`mailto:${company.email}`} style={{ color: "white", fontWeight: 700 }}>
              {company.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${company.phoneTel}`} style={{ color: "white", fontWeight: 700 }}>
              {company.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
