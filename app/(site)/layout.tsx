import type { Metadata, Viewport } from "next";
import "../globals.css";
import { inter } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd, organizationJsonLd, softwareApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

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

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={softwareApplicationJsonLd()} />
      </body>
    </html>
  );
}
