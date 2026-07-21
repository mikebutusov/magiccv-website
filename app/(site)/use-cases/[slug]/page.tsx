import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCasePageTemplate } from "@/components/templates/use-case-page-template";
import { getUseCase, getUseCases } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const useCases = await getUseCases();
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = await getUseCase(slug);
  if (!useCase) return {};
  return buildMetadata({ ...useCase.seo, path: `/use-cases/${slug}` });
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = await getUseCase(slug);
  if (!useCase) notFound();
  return <UseCasePageTemplate useCase={useCase} />;
}
