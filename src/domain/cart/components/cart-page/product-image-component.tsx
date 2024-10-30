import { ProductLinkComponent } from "@/domain/product/components/product-link-component";
import { UiFigureComponent } from "@/ui-figure-component";
import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";

export function ProductImage({
  product,
}: {
  product: ProductWithPageAndBookPrisma;
}) {
  return (
    <ProductLinkComponent product={product} className="w-[145px] lg:row-span-2">
      <UiFigureComponent
        src={`product/${product.page.slug}`}
        width={145}
        height={193}
        alt={product.name}
        className="w-[145px] h-[193px] relative"
        innerImgStyle="object-cover w-full h-full"
      />
    </ProductLinkComponent>
  );
}
