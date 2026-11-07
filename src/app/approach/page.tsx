import type { Metadata } from "next";
import Link from "next/link";
import { pages } from "@/lib/content";

const c = pages.approach;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
};

export default function ApproachPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Approach</p>
          <h1>{c.headline}</h1>
          <p className="lead">{c.introduction}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {c.stages.map((stage, index) => (
              <li key={stage.title} className="stage-item" style={{ display: "grid", gap: "0.5rem" }}>
                <p className="eyebrow" style={{ margin: 0 }}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 style={{ margin: 0, fontSize: "1.6rem" }}>{stage.title}</h2>
                <p style={{ margin: 0, maxWidth: "40rem" }}>{stage.body}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: "1.5rem", color: "var(--muted)", fontSize: "0.95rem" }}>
            {c.stagesDisclaimer}
          </p>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <h2 style={{ marginTop: 0, maxWidth: "16ch" }}>{c.partnershipBlock.headline}</h2>
          <p style={{ maxWidth: "40rem", color: "rgba(255,255,255,0.82)", fontSize: "1.08rem" }}>
            {c.partnershipBlock.body}
          </p>
          <Link href="/partnerships" className="btn btn-primary">
            Discuss a Partnership
          </Link>
        </div>
      </section>
    </>
  );
}
