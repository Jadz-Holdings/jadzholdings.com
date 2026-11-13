"use client";

import { useEffect, useState, type CSSProperties } from "react";

/**
 * Contact email assembled only after hydration.
 * Keeps a contiguous address out of static HTML so naive scrapers cannot
 * regex-harvest mailto:/user@domain from the page source.
 * This slows commodity harvesters; it does not stop bots that execute JS.
 */
const EMAIL_CODES = [
  105, 110, 102, 111, 64, 106, 97, 100, 122, 104, 111, 108, 100, 105, 110, 103,
  115, 46, 99, 111, 109,
] as const;

function decodeEmail() {
  return String.fromCharCode(...EMAIL_CODES);
}

type ObfuscatedEmailProps = {
  className?: string;
  style?: CSSProperties;
  /** When false, render decoded text only (no mailto). Default true. */
  link?: boolean;
};

export function ObfuscatedEmail({ className, style, link = true }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(decodeEmail());
  }, []);

  if (!email) {
    return (
      <span className={className} style={style}>
        info [at] jadzholdings [dot] com
      </span>
    );
  }

  if (!link) {
    return (
      <span className={className} style={style}>
        {email}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className} style={style}>
      {email}
    </a>
  );
}
