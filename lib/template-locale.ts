import { dictionaries, localePrefix, type AnyLocale } from "@/lib/i18n";
import { pageDictionaries, templateStrings, type TemplateStrings } from "@/lib/i18n-pages";
import { site } from "@/lib/site";

export interface TemplateCtx {
  tpl: TemplateStrings;
  prefix: string;
  /** Prefixes internal hrefs with the locale segment; leaves external URLs alone. */
  px: (href: string) => string;
  /** Spread into <CTASection {...ctx.cta} /> - empty for EN so defaults apply. */
  cta: Partial<{
    headline: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  }>;
  /** Spread into <Hero {...ctx.heroCtas} /> - empty for EN. */
  heroCtas: Partial<{
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  }>;
  testimonial?: { quote: string; name: string; role: string; firm: string; initials: string };
}

export function templateCtx(locale: AnyLocale = "en"): TemplateCtx {
  const tpl = templateStrings(locale);
  const prefix = localePrefix(locale);
  const px = (href: string) => (href.startsWith("/") ? `${prefix}${href}` : href);
  if (locale === "en") {
    return { tpl, prefix, px, cta: {}, heroCtas: {} };
  }
  const dict = dictionaries[locale];
  const pages = pageDictionaries[locale];
  const ctas = {
    primaryCta: { label: dict.nav.getStarted, href: site.signUpUrl },
    secondaryCta: { label: dict.nav.bookDemo, href: `${prefix}/demo` },
  };
  return {
    tpl,
    prefix,
    px,
    cta: { headline: dict.cta.headline, body: dict.cta.body, ...ctas },
    heroCtas: ctas,
    testimonial: pages.testimonial,
  };
}
