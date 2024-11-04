import { render, screen } from "@/lib/test";
import { AddToCartComponent } from "../add-to-cart-component";
import { ProductPageProvider } from "@/domain/product/contexts/product-page-context";
import { productWithBookAndCategoriesMock } from "@/domain/product/__tests__/product-with-book-and-categories-mock";

describe("AddToCartComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <ProductPageProvider product={productWithBookAndCategoriesMock}>
        <AddToCartComponent />
      </ProductPageProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
