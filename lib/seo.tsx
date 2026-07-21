import type { Metadata } from "next";
import { site } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  languages,
  ogLocale = "en_US",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** hreflang map, e.g. { en: "/", de: "/de", "x-default": "/" } (paths, not full URLs) */
  languages?: Record<string, string>;
  ogLocale?: string;
  /** Bypass the "%s - MagicCV" title template (use when the title already carries the brand). */
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  const languageUrls = languages
    ? Object.fromEntries(Object.entries(languages).map(([lang, p]) => [lang, `${site.url}${p}`]))
    : undefined;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url, ...(languageUrls ? { languages: languageUrls } : {}) },
    // Image is generated at build time by app/opengraph-image.tsx; referenced
    // explicitly because page-level openGraph replaces file-convention images.
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: ogLocale,
      type: "website",
      images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: `${site.name} - CV & resume management software` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    description: site.description,
    sameAs: [site.social.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: ["en", "de", "fr", "nl", "sv"],
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: site.description,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "50",
    },
  };
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: site.description,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "50",
      offerCount: "4",
    },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${site.url}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", name: site.name },
  };
}

/** Renders a JSON-LD <script> tag. Use inside a Server Component. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
