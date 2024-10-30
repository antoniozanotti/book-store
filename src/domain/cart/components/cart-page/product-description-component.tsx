import { ProductLinkComponent } from "@/domain/product/components/product-link-component";
import { getAuthorsByProduct } from "@/domain/product/helpers/get-authors-by-product";
import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";

export function ProductDescription({
  product,
}: {
  product: ProductWithPageAndBookPrisma;
}) {
  return (
    <div className="h-fit">
      <ProductLinkComponent product={product} className="line-clamp-2">
        <h2>{product.name}</h2>
      </ProductLinkComponent>
      <span className="line-clamp-2 block text-sm">
        by {getAuthorsByProduct(product)}
      </span>
      <span className="block text-sm my-2">ISBN: {product.isbn}</span>
    </div>
  );
}
