"use client";

import { useEffect, useState, type CSSProperties } from "react";

/**
 * Stronger than at/dot substitution: the address never appears in static HTML
 * (no contiguous mailbox, no mailto:, no "at"/"dot" plaintext).
 * Reconstructed client-side after hydration from opaque base64 parts.
 * Blocks most HTML regex harvesters; bots that execute JS can still recover it.
 */
const LOCAL_B64 = "aW5mbw==";
const DOMAIN_B64 = "amFkemhvbGRpbmdzLmNvbQ==";

function decodeEmail() {
  return `${atob(LOCAL_B64)}@${atob(DOMAIN_B64)}`;
}

type ObfuscatedEmailProps = {
  className?: string;
  style?: CSSProperties;
  /** When false, render decoded text only (no mailto). Default true. */
  link?: boolean;
  /**
   * Pre-hydration label. Must not look like an email address.
   * Default: "Email us"
   */
  placeholder?: string;
};

export function ObfuscatedEmail({
  className,
  style,
  link = true,
  placeholder = "Email us",
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(decodeEmail());
  }, []);

  if (!email) {
    return (
      <span className={className} style={style}>
        {placeholder}
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
