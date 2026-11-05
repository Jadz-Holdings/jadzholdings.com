import Link from "next/link";
import { company, footer, navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{footer.brand}</p>
            <p style={{ maxWidth: "28rem", margin: "0 0 1.25rem" }}>{footer.supportingLine}</p>
            <p style={{ margin: "0 0 0.35rem" }}>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p style={{ margin: "0 0 0.35rem" }}>
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
            </p>
            <p style={{ margin: 0 }}>{company.mailingAddress.inline}</p>
          </div>

          <div>
            <p style={{ color: "white", fontWeight: 700, marginBottom: "0.85rem" }}>Explore</p>
            <div className="footer-links">
              {navigation.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: "white", fontWeight: 700, marginBottom: "0.85rem" }}>Legal</p>
            <div className="footer-links">
              {navigation.footerLegalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <p style={{ margin: 0 }}>{footer.copyright}</p>
          <p style={{ margin: 0 }}>{footer.statusNote}</p>
        </div>
      </div>
    </footer>
  );
}
