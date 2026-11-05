"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { company, navigation } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
      <div className="container" style={{ paddingBlock: "0.9rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            className="nav-link"
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-syne), system-ui, sans-serif",
              fontWeight: 750,
              fontSize: "1.15rem",
              color: "var(--navy)",
              textDecoration: "none",
            }}
          >
            {company.publicName}
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.35rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link"
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={navigation.primaryCta.href} className="btn btn-primary">
                  {navigation.primaryCta.label}
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        <nav
          id={menuId}
          className="mobile-nav"
          aria-label="Mobile"
          hidden={!open}
        >
          {navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={navigation.primaryCta.href}
            className="btn btn-primary"
            style={{ width: "fit-content" }}
            onClick={closeMenu}
          >
            {navigation.primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
