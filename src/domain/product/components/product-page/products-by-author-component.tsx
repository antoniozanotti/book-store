import { ProductsByAuthorComponentInterface } from "./products-by-author-component-interface";
import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { ProductListingComponent } from "../product-listing-component";
import { AuthorWithPagePrisma } from "@/domain/author/types/author-prisma";
import { ProductListItemComponent } from "../product-list-item-component";
import { AuthorLinkComponent } from "@/domain/author/components/author-link-component";

export function ProductsByAuthorComponent({
  author,
  ...props
}: ProductsByAuthorComponentInterface) {
  return (
    author.books.length >= 1 && (
      <div {...props}>
        <UiTitleComponent level="h3" size="medium" className="mt-10">
          Books Also Written by {author.name}
        </UiTitleComponent>
        <div className="mt-2">
          <ProductListingComponent
            products={author.books.map((book) => book.product)}
            endCard={<FinalCardComponent author={author} />}
          />
        </div>
      </div>
    )
  );
}

function FinalCardComponent({ author }: { author: AuthorWithPagePrisma }) {
  return (
    <ProductListItemComponent>
      <AuthorLinkComponent author={author} className="flex items-center h-full">
        <span>See all books by {author.name}.</span>
      </AuthorLinkComponent>
    </ProductListItemComponent>
  );
}
