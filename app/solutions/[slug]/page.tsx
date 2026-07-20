import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RolePageTemplate } from "@/components/templates/role-page-template";
import { IndustryPageTemplate } from "@/components/templates/industry-page-template";
import { roles, getRole } from "@/lib/content/roles";
import { industries, getIndustry } from "@/lib/content/industries";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return [...roles.map((r) => ({ slug: r.slug })), ...industries.map((i) => ({ slug: i.slug }))];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (role) return buildMetadata({ ...role.seo, path: `/solutions/${slug}` });
  const industry = getIndustry(slug);
  if (industry) return buildMetadata({ ...industry.seo, path: `/solutions/${slug}` });
  return {};
}

export default async function SolutionsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  if (role) return <RolePageTemplate role={role} />;
  const industry = getIndustry(slug);
  if (industry) return <IndustryPageTemplate industry={industry} />;
  notFound();
}
