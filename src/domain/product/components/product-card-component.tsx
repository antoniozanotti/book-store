import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import { ProductLinkComponent } from "./product-link-component";
import { getAuthorsByProduct } from "../helpers/get-authors-by-product";
import { ProductListItemComponent } from "./product-list-item-component";
import { UiFigureComponent } from "@/ui-figure-component";

export function ProductCardComponent({
  product,
}: {
  product: ProductWithPageAndBookPrisma;
}) {
  return (
    <ProductListItemComponent>
      <ProductLinkComponent product={product}>
        <UiFigureComponent
          src={`product/${product.page.slug}`}
          width={187}
          originalWidth={640}
          height={269}
          alt={product.name}
          className="w-full sm:w-[187px] h-[249px] relative overflow-hidden"
          innerImgStyle="hover:-mt-[20px] w-full h-[269px] object-cover"
        />
      </ProductLinkComponent>
      <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
        <ProductLinkComponent product={product}>
          {product.name}
        </ProductLinkComponent>
      </UiTitleComponent>
      <address className="line-clamp-2">
        by {getAuthorsByProduct(product)}
      </address>
    </ProductListItemComponent>
  );
}
