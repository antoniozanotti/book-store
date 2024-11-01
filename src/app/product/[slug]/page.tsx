import type { Metadata } from "next";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { PageType } from "@/types/page-type";
import { ProductPageContainer } from "@/domain/product/containers/product-page-container";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await handlePageBySlugAndType(params.slug, PageType.PRODUCT);
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  return <ProductPageContainer slug={params.slug} />;
}
