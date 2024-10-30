import { ProductsFromCategoryComponentInterface } from "./products-from-category-component-interface";
import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { ProductListingComponent } from "../product-listing-component";
import { CategoryWithPagePrisma } from "@/domain/category/types/category-prisma";
import { ProductListItemComponent } from "../product-list-item-component";
import { CategoryLinkComponent } from "@/domain/category/components/category-link-component";

export function ProductsFromCategoryComponent({
  category,
  ...props
}: ProductsFromCategoryComponentInterface) {
  return (
    category.products.length >= 1 && (
      <div {...props}>
        <UiTitleComponent level="h3" size="medium" className="mt-10">
          {category.name} Books You May Also Like
        </UiTitleComponent>
        <div className="mt-2">
          <ProductListingComponent
            products={category.products}
            endCard={<FinalCard category={category} />}
          />
        </div>
      </div>
    )
  );
}

function FinalCard({ category }: { category: CategoryWithPagePrisma }) {
  return (
    <ProductListItemComponent>
      <CategoryLinkComponent
        category={category}
        className="flex items-center h-full"
      >
        <span>See all books from {category.name}.</span>
      </CategoryLinkComponent>
    </ProductListItemComponent>
  );
}
