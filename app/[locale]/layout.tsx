import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { inter } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd, organizationJsonLd, softwareApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { isLocale, LOCALES, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - CV & Resume Management Software`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#5a4bd8",
};

const SKIP_LABEL: Record<Locale, string> = {
  de: "Zum Inhalt springen",
  fr: "Aller au contenu principal",
  nl: "Naar de inhoud",
  sv: "Hoppa till innehållet",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          {SKIP_LABEL[locale]}
        </a>
        <SiteHeader locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={softwareApplicationJsonLd()} />
      </body>
    </html>
  );
}
