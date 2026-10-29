/**
 * Canonical site content for jadzholdings.com.
 * Keep in sync with docs/brand/site-content.json and
 * /cursor/stores/self/jadz-holdings/site-content.json
 */

export const company = {
  publicName: "Jadz Holdings",
  legalName: "Jadz Holdings LLC",
  founder: "Don Banyong",
  email: "info@jadzholdings.com",
  phoneDisplay: "(571) 628-2444",
  phoneTel: "+15716282444",
  mailingAddress: {
    lines: ["Jadz Holdings LLC", "750 3rd St. NW #304", "Washington, DC 20001"] as const,
    inline: "750 3rd St. NW #304, Washington, DC 20001",
    note: "This is a business mailing address for correspondence. It is not a walk-in office.",
  },
  tagline: "Building businesses that connect technology with everyday life.",
  /** Static copyright year for prerender-safe builds; bump annually. */
  copyrightYear: 2026,
} as const;

export const navigation = {
  primaryCta: { label: "Connect With Us", href: "/contact" },
  links: [
    { label: "About", href: "/about" },
    { label: "Our Ventures", href: "/ventures" },
    { label: "Our Approach", href: "/approach" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
  footerLegalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const footer = {
  brand: company.publicName,
  supportingLine: company.tagline,
  copyright: `© ${company.copyrightYear} ${company.legalName}. All rights reserved.`,
  statusNote:
    "Ventures and capabilities described on this website may be in development. Availability varies by venture and rollout stage.",
} as const;

export const interestOptions = [
  "Jadz Holdings corporate inquiry",
  "SPAAVS",
  "FloqMedia",
  "Software or integration partnership",
  "Strategic partnership",
  "Other business inquiry",
] as const;

export const spaavs = {
  id: "spaavs",
  displayName: "SPAAVS",
  wordmark: "SPΛΛVS",
  a11yName: "SPAAVS",
  descriptor: "Smart Parking & Autonomous Vehicle Services",
  tagline: "Turning Parking Into Possibility.",
  status: "In development",
  href: "/ventures/spaavs",
  exploreButton: "Explore SPAAVS",
  descriptions: [
    "SPAAVS is the trading name for Jadz Smart Parking and Autonomous Vehicle Services, a subsidiary of Jadz Holdings LLC. It is developing a platform that connects human drivers, parking facilities, vehicle-service providers, and fleet systems.",
    "The planned experience brings together parking discovery, reservations, EV charging, selected vehicle services, and unified billing. Compatible fleet and autonomous-vehicle integrations form part of its development direction.",
    "SPAAVS aims to work with existing parking facilities through partnerships, connecting available infrastructure with new service opportunities.",
  ],
  developmentDisclaimer:
    "Capabilities described here are in development and are not currently available as live services.",
  focusAreas: [
    "Parking discovery and reservations.",
    "EV charging coordination.",
    "Vehicle-service marketplace.",
    "Unified billing.",
    "Facility and fleet integrations.",
    "Future autonomous-ready capabilities at validated locations.",
  ],
  partnershipModel:
    "Parking facilities are approached as partners. SPAAVS is designed to connect available infrastructure with new service opportunities rather than requiring mandatory facility-software subscriptions as a commercial model.",
} as const;

export const floqmedia = {
  id: "floqmedia",
  displayName: "FloqMedia",
  publicPhrase: "FloqMedia, a Jadz Holdings venture",
  descriptor: "Media, technology, and interactive venue experiences.",
  status: "In development",
  href: "/ventures/floqmedia",
  exploreButton: "Explore FloqMedia",
  descriptions: [
    "FloqMedia is a developing Jadz Holdings venture focused on connecting brands and people through digital platforms, media, advertising, and interactive experiences.",
    "Its development includes software applications and digital services designed for restaurants, bars, lounges, clubs, entertainment venues, and other high-traffic environments.",
  ],
  focusAreas: [
    "Media and advertising solutions.",
    "Software platforms and digital services.",
    "Interactive venue experiences.",
    "Digital content and audience engagement.",
    "Event discovery and booking concepts.",
    "Connections between brands, venues, and customers.",
  ],
  platforms: [
    {
      name: "FloqR",
      status: "In development",
      description:
        "A platform under development within the FloqMedia ecosystem, connecting venue experiences and digital engagement.",
    },
    {
      name: "ShoutOut",
      status: "In development",
      description:
        "A developing interactive content and display experience within the FloqR ecosystem.",
    },
  ],
} as const;

export const damme = {
  id: "damme",
  displayName: "Damme",
  descriptor: "A developing venture within the Jadz Holdings portfolio.",
  status: "In development",
} as const;

export const topvr = {
  id: "topvr",
  displayName: "TopVR",
  descriptor: "A developing venture within the Jadz Holdings portfolio.",
  status: "In development",
} as const;

export const ventures = {
  spaavs,
  floqmedia,
  damme,
  topvr,
} as const;

export const pages = {
  home: {
    seo: {
      title: "Jadz Holdings | Mobility, Media & Digital Platforms",
      description:
        "Jadz Holdings develops ventures in smart mobility, media, digital engagement, and software platforms. Explore our businesses and partnership opportunities.",
    },
    hero: {
      eyebrow: "JADZ HOLDINGS",
      headline: "Building businesses that connect technology with everyday life.",
      paragraph:
        "Jadz Holdings develops ventures at the intersection of digital platforms, media, mobility (including autonomous vehicle), and services. We focus on practical opportunities to improve how people move, connect, and engage with the places around them.",
      primaryButton: { label: "Explore Our Ventures", href: "/ventures" },
      secondaryButton: { label: "Discuss a Partnership", href: "/partnerships" },
    },
    supportingStatement:
      "From smarter parking to engaging venue experiences, our work connects software, services, and real-world needs.",
    foundation: {
      headline: "A shared foundation. Distinct business opportunities.",
      body: "Our ventures address different markets, with a common approach: understand the customer, build around real operating needs, and connect the right technology and partners.",
      cards: [
        {
          title: "Mobility & Vehicle Services",
          body: "Connecting drivers and fleets with parking facilities, charging, and available vehicle services.",
        },
        {
          title: "Media & Digital Engagement",
          body: "Developing ways for brands, venues, and audiences to connect through media and interactive experiences.",
        },
        {
          title: "Software & Platforms",
          body: "Building applications and integrations that coordinate services and improve customer experiences.",
        },
      ],
    },
    portfolioPreview: {
      headline: "Explore what we are building.",
    },
    closing: {
      headline: "Build the next opportunity with us.",
      paragraph:
        "We welcome conversations with operators, property owners, service providers, technology companies, and strategic collaborators who see opportunities to build useful businesses together.",
      button: { label: "Start a Conversation", href: "/contact" },
    },
  },
  about: {
    seo: {
      title: "About",
      description:
        "Learn about Jadz Holdings LLC, founded by Don Banyong, and our mission to build businesses that make technology useful in everyday environments.",
    },
    headline: "Practical ideas. Connected businesses.",
    mainCopy: [
      "Jadz Holdings LLC is a US-registered holding company. Founded by Don Banyong, the company is developing ventures that bring digital platforms and coordinated services into everyday environments.",
      "Our work begins with understanding how an experience operates today: the customer journey, the business process, the physical environment, and the opportunity for improvement.",
      "From there, we develop software platforms, commercial models, and partnerships designed around those needs.",
    ],
    mission: "To build businesses that make technology useful in everyday environments.",
    vision:
      "A more connected relationship between digital platforms, physical places, and the services people use.",
    leadership: {
      name: "Don Banyong",
      title: "Founder, Jadz Holdings LLC",
      biography:
        "Don Banyong leads the development of Jadz Holdings’ business concepts, platform strategies, and partnership opportunities. His current work includes smart parking and vehicle-service coordination, digital media, and interactive venue experiences.",
    },
  },
  venturesIndex: {
    seo: {
      title: "Our Ventures",
      description:
        "Explore Jadz Holdings ventures across mobility, media, and digital platforms — including SPAAVS, FloqMedia, Damme, and TopVR.",
    },
    headline: "Distinct ventures. A connected approach.",
    introduction:
      "Jadz Holdings is developing businesses across mobility, media, and digital platforms. Each venture has its own customers, product direction, and path to market.",
  },
  approach: {
    seo: {
      title: "Our Approach",
      description:
        "How Jadz Holdings develops business opportunities by connecting customer needs, operating realities, digital technology, and partnerships.",
    },
    headline: "Start with the need. Build the right connection.",
    introduction:
      "We develop business opportunities by connecting customer needs, operating realities, digital technology, and partnerships.",
    stages: [
      {
        title: "Understand",
        body: "Study the customer experience, business process, and environment before defining the solution.",
      },
      {
        title: "Design",
        body: "Connect the commercial model with the product experience and operating requirements.",
      },
      {
        title: "Develop",
        body: "Build software, service workflows, and integrations around a focused use case.",
      },
      {
        title: "Validate",
        body: "Test assumptions through prototypes, partner feedback, and appropriately scoped pilots.",
      },
      {
        title: "Expand",
        body: "Grow when customer demand, delivery reliability, and business economics support the next stage.",
      },
    ],
    stagesDisclaimer:
      "This describes our company approach. Individual ventures may be at different stages of development.",
    partnershipBlock: {
      headline: "Partnership is part of the architecture.",
      body: "Many opportunities begin with infrastructure, expertise, and relationships that already exist. We look for ways to work with operators, property owners, technology providers, and service businesses to create value together.",
    },
  },
  partnerships: {
    seo: {
      title: "Partnerships",
      description:
        "Explore partnership opportunities with Jadz Holdings across property, venues, media, technology, service, fleet, and strategic collaboration.",
    },
    headline: "Bring your capabilities. Explore what we can build together.",
    introduction:
      "Jadz Holdings welcomes conversations with organizations whose expertise, infrastructure, or customer relationships complement our developing ventures.",
    categories: [
      {
        title: "Property & Facility Partners",
        body: "Parking operators, property owners, malls, residential communities, and other organizations exploring connected services.",
      },
      {
        title: "Venues & Media Partners",
        body: "Restaurants, bars, lounges, clubs, event venues, advertisers, and brands exploring digital engagement and media opportunities.",
      },
      {
        title: "Technology & Integration Partners",
        body: "Software companies, platform providers, and integration specialists interested in connecting systems and customer experiences.",
      },
      {
        title: "Service & Fleet Partners",
        body: "Vehicle-service providers, charging partners, and fleet operators exploring coordinated facility-based services.",
      },
      {
        title: "Strategic Collaborators",
        body: "Organizations interested in joint development, commercial partnerships, or other aligned business opportunities.",
      },
    ],
    closing: {
      copy: "Tell us about your organization, the opportunity you see, and where you believe our work could connect.",
      button: { label: "Discuss a Partnership", href: "/contact" },
      directContactLine: "Email info@jadzholdings.com or call (571) 628-2444.",
    },
  },
  contact: {
    seo: {
      title: "Contact Jadz Holdings",
      description:
        "Contact Jadz Holdings at info@jadzholdings.com or (571) 628-2444 to discuss our ventures, partnerships, and business opportunities.",
    },
    headline: "Let’s connect.",
    introduction: "Contact Jadz Holdings to discuss a venture, partnership, or business opportunity.",
    form: {
      title: "Send an inquiry",
      submitLabel: "Send Inquiry",
      successMessage: "Thank you for contacting Jadz Holdings. Your inquiry has been received.",
      errorMessage:
        "We couldn’t send your message. Please try again or email info@jadzholdings.com.",
      unavailableMessage:
        "The online inquiry form is currently unavailable. Please contact us directly:",
      marketingConsentLabel:
        "Optional: I am open to occasional updates about Jadz Holdings ventures and partnership opportunities. This is separate from your inquiry.",
    },
  },
  privacy: {
    seo: {
      title: "Privacy",
      description:
        "Privacy information for the Jadz Holdings website, including how contact inquiries are handled.",
    },
  },
  terms: {
    seo: {
      title: "Terms",
      description:
        "Terms of use for the Jadz Holdings website covering informational content and venture development status.",
    },
  },
  spaavsPage: {
    seo: {
      title: "SPAAVS",
      description:
        "SPAAVS — Smart Parking & Autonomous Vehicle Services. Turning Parking Into Possibility. A Jadz Holdings subsidiary in development.",
    },
  },
  floqmediaPage: {
    seo: {
      title: "FloqMedia",
      description:
        "FloqMedia, a Jadz Holdings venture, develops media, advertising, software platforms, and interactive venue experiences — including FloqR and ShoutOut.",
    },
  },
} as const;

/** Design tokens mirrored from docs/brand/design-system.md */
export const designTokens = {
  colors: {
    navy: "#0B1F33",
    navyDeep: "#071521",
    navyMid: "#14304A",
    charcoal: "#1A222C",
    slate: "#3D4A59",
    muted: "#5C6B7A",
    fog: "#E8EEF3",
    cloud: "#F4F7FA",
    white: "#FFFFFF",
    teal: "#2F7F86",
    tealBright: "#3A9AA3",
    tealSoft: "#D7E9EB",
    metal: "#8FA3B5",
    spaavsGreen: "#1F8A4C",
    spaavsGreenDeep: "#146338",
    spaavsGreenSoft: "#E6F5EC",
  },
  fonts: {
    display: "Syne",
    body: "Manrope",
  },
} as const;
