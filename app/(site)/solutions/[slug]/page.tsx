import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RolePageTemplate } from "@/components/templates/role-page-template";
import { IndustryPageTemplate } from "@/components/templates/industry-page-template";
import { getRole, getRoles, getIndustry, getIndustries } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const [roles, industries] = await Promise.all([getRoles(), getIndustries()]);
  return [...roles.map((r) => ({ slug: r.slug })), ...industries.map((i) => ({ slug: i.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = await getRole(slug);
  if (role) return buildMetadata({ ...role.seo, path: `/solutions/${slug}` });
  const industry = await getIndustry(slug);
  if (industry) return buildMetadata({ ...industry.seo, path: `/solutions/${slug}` });
  return {};
}

export default async function SolutionsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = await getRole(slug);
  if (role) return <RolePageTemplate role={role} />;
  const industry = await getIndustry(slug);
  if (industry) return <IndustryPageTemplate industry={industry} />;
  notFound();
}
