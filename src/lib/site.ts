/**
 * Compatibility helpers — prefer importing from `@/lib/content`.
 * Canonical definitions: docs/brand/ + /cursor/stores/self/jadz-holdings/
 */

import {
  company,
  floqmedia,
  footer as footerContent,
  interestOptions as interestOpts,
  navigation,
  spaavs,
  ventures as ventureMap,
} from "@/lib/content";

export const site = {
  name: company.publicName,
  legalName: company.legalName,
  founder: company.founder,
  email: company.email,
  phoneDisplay: company.phoneDisplay,
  phoneTel: company.phoneTel,
  addressLines: company.mailingAddress.lines,
  addressInline: company.mailingAddress.inline,
  addressNote: company.mailingAddress.note,
  tagline: company.tagline,
  year: company.copyrightYear,
} as const;

export const navLinks = navigation.links;
export const primaryCta = navigation.primaryCta;
export const interestOptions = interestOpts;
export const footer = footerContent;

export const ventures = {
  spaavs: {
    slug: spaavs.id,
    name: spaavs.displayName,
    wordmark: spaavs.wordmark,
    descriptor: spaavs.descriptor,
    tagline: spaavs.tagline,
    status: spaavs.status,
    href: spaavs.href,
  },
  floqmedia: {
    slug: floqmedia.id,
    name: floqmedia.displayName,
    descriptor: floqmedia.descriptor,
    status: floqmedia.status,
    href: floqmedia.href,
  },
  damme: {
    slug: ventureMap.damme.id,
    name: ventureMap.damme.displayName,
    descriptor: ventureMap.damme.descriptor,
    status: ventureMap.damme.status,
  },
  topvr: {
    slug: ventureMap.topvr.id,
    name: ventureMap.topvr.displayName,
    descriptor: ventureMap.topvr.descriptor,
    status: ventureMap.topvr.status,
  },
} as const;
