import type { BlogPost } from "./blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.realtorjeffersonprada.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#agent`,
  name: "Jefferson Prada",
  alternateName: "Realtor Jefferson Prada",
  jobTitle: "Real Estate Sales Associate",
  url: SITE_URL,
  image: `${SITE_URL}/images/jefferson-prada.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "Estratega financiero inmobiliario en Miami. Compra, venta e inversion en Brickell, Coral Gables, Miami Beach, Sunny Isles y Coconut Grove.",
  telephone: "+1-786-616-6307",
  email: "info@realtorjeffersonprada.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "City", name: "Miami Beach" },
    { "@type": "City", name: "Coral Gables" },
    { "@type": "City", name: "Coconut Grove" },
    { "@type": "City", name: "Sunny Isles Beach" },
    { "@type": "City", name: "Doral" },
    { "@type": "City", name: "Wynwood" },
    { "@type": "City", name: "Brickell" },
    { "@type": "City", name: "Edgewater" },
    { "@type": "City", name: "Downtown Miami" },
  ],
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Avanti Way Realty",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Florida Real Estate Sales Associate License",
    identifier: "SL3643823",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "Florida Department of Business and Professional Regulation (DBPR)",
      url: "https://www.myfloridalicense.com/",
    },
  },
  sameAs: [
    "https://www.youtube.com/@realtorjeffersonprada",
    "https://www.instagram.com/realtor.jeffersonprada/",
    "https://www.facebook.com/realtorjeffersonprada",
    "https://wa.link/z762nk",
  ],
  knowsLanguage: ["en", "es", "pt"],
};

export function articleSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Jefferson Prada Real Estate",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
