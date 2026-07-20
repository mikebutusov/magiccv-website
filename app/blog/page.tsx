import { BlogIndex } from "@/components/blog-index";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { RelatedLinks } from "@/components/related-links";
import { Section } from "@/components/ui/container";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog -- Consulting proposals, CVs & bid management",
  description:
    "Practical thinking on proposal and bid ops, CV management, and AI for consulting -- from the MagicCV team.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">
          The MagicCV blog -- proposals, CVs, and winning more consulting work.
        </h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">
          Practical thinking on bid ops, CV management, and what AI actually changes about proposal work.
        </p>
        <div className="mt-10">
          <BlogIndex posts={posts} />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="rounded-3xl border border-border bg-paper p-8 text-center">
          <p className="text-lg font-medium text-ink">Get proposal & CV-ops tips in your inbox</p>
          <div className="mt-4 flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks
          title="Explore MagicCV"
          links={[
            { label: "Features", href: "/features" },
            { label: "Use cases", href: "/use-cases" },
            { label: "Comparisons", href: "/compare" },
          ]}
        />
      </Section>
    </>
  );
}
