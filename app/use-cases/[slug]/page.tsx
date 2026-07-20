import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCasePageTemplate } from "@/components/templates/use-case-page-template";
import { useCases, getUseCase } from "@/lib/content/use-cases";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return buildMetadata({ ...useCase.seo, path: `/use-cases/${slug}` });
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();
  return <UseCasePageTemplate useCase={useCase} />;
}
