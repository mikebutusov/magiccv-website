import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrialCTA } from "@/components/trial-cta";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { PortableTextBody } from "@/components/portable-text-body";
import { BlogThumb } from "@/components/blog-thumb";
import { Section } from "@/components/ui/container";
import { getBlogPost, getBlogPosts } from "@/lib/data-blog";
import { articleJsonLd, buildMetadata, JsonLd } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

const TRIAL_MARKER = "{/* TRIAL_CTA */}";

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => <h2 className="mt-10 text-2xl font-medium text-ink" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 className="mt-8 text-xl font-medium text-ink" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="mt-4 leading-relaxed text-ink-soft" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-soft" {...props} />,
  ol: (props: React.ComponentProps<"ol">) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-ink-soft" {...props} />,
  a: (props: React.ComponentProps<"a">) => (
    <a className="font-medium text-primary underline underline-offset-4 hover:text-primary-soft" {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="border-b border-border bg-surface p-3 font-medium text-ink" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => <td className="border-b border-border p-3 text-ink-soft" {...props} />,
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    keywords: post.frontmatter.keywords,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const related = (await getBlogPosts()).filter((p) => p.slug !== slug).slice(0, 3);

  // Local MDX posts split on an inline marker to place the TrialCTA; Sanity
  // posts embed a trialCta block in portable text instead.
  const [beforeCta, afterCta] =
    post.source === "local" && post.content.includes(TRIAL_MARKER)
      ? post.content.split(TRIAL_MARKER)
      : [post.source === "local" ? post.content : "", ""];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.frontmatter.title, href: `/blog/${slug}` },
        ]}
      />

      <Section>
        <article className="mx-auto max-w-measure">
          <span className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
            {post.frontmatter.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink">{post.frontmatter.title}</h1>
          <p className="mt-3 text-sm text-muted">
            By {post.frontmatter.author} &middot; {post.frontmatter.date} &middot; {post.readingTime}
          </p>
          <BlogThumb category={post.frontmatter.category} seed={slug} className="mt-8 aspect-[16/9]" />

          <div className="mt-8">
            {post.source === "sanity" ? (
              <PortableTextBody value={post.body} />
            ) : (
              <>
                <MDXRemote
                  source={beforeCta}
                  components={mdxComponents}
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
                />
                {afterCta && (
                  <>
                    <div className="my-8">
                      <TrialCTA />
                    </div>
                    <MDXRemote
                      source={afterCta}
                      components={mdxComponents}
                      options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
                    />
                  </>
                )}
              </>
            )}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-5 text-sm text-ink-soft">
            Written by <span className="font-medium text-ink">{post.frontmatter.author}</span> at MagicCV.
          </div>
        </article>
      </Section>

      <Section className="border-t border-border bg-surface">
        <RelatedLinks
          title="Related reading"
          links={[
            ...related.map((p) => ({ label: p.frontmatter.title, href: `/blog/${p.slug}` })),
            { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
          ]}
        />
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 text-center">
          <p className="text-lg font-medium text-ink">Get proposal & CV-ops tips in your inbox</p>
          <div className="mt-4 flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </Section>

      <CTASection />
      <JsonLd
        data={articleJsonLd({
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          path: `/blog/${slug}`,
          datePublished: post.frontmatter.date,
          dateModified: post.frontmatter.updated,
          author: post.frontmatter.author,
        })}
      />
    </>
  );
}
