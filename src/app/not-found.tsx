import Link from "next/link";
import { company } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh" }}>
      <div className="container">
        <p className="eyebrow">{company.publicName}</p>
        <h1>Page not found</h1>
        <p className="lead">
          The page you requested is not available. Return home or contact us to continue the
          conversation.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "1.25rem" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
