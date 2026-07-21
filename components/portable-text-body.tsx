import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { TrialCTA } from "@/components/trial-cta";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4 leading-relaxed text-ink-soft">{children}</p>,
    h2: ({ children }) => <h2 className="mt-10 text-2xl font-medium text-ink">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-xl font-medium text-ink">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-primary pl-4 text-ink-soft italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-soft">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-ink-soft">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-medium text-primary underline underline-offset-4 hover:text-primary-soft"
      >
        {children}
      </a>
    ),
  },
  types: {
    trialCta: () => (
      <div className="my-8">
        <TrialCTA />
      </div>
    ),
    image: ({ value }) => (
      <Image
        src={urlForImage(value).width(1600).url()}
        alt={value?.alt ?? ""}
        width={1600}
        height={900}
        className="mt-6 rounded-2xl border border-border"
      />
    ),
  },
};

export function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
