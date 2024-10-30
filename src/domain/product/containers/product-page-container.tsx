import { getProductWithRelatedProductsBySlug } from "../services/product-service";
import { ProductPageProvider } from "../contexts/product-page-context";
import { ProductPageComponent } from "../components/product-page/product-page-component";
import { notFound } from "next/navigation";

export async function ProductPageContainer({ slug }: { slug: string }) {
  try {
    const product = await getProductWithRelatedProductsBySlug(slug);

    return (
      <ProductPageProvider product={JSON.parse(JSON.stringify(product))}>
        <ProductPageComponent />
      </ProductPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
