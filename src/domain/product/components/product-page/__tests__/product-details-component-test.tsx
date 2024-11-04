import { render, screen } from "@/lib/test";
import { ProductDetailsComponent } from "../product-details-component";
import { ProductPageProvider } from "@/domain/product/contexts/product-page-context";
import { productWithBookAndCategoriesMock } from "@/domain/product/__tests__/product-with-book-and-categories-mock";

describe("ProductDetailsComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <ProductPageProvider product={productWithBookAndCategoriesMock}>
        <ProductDetailsComponent />
      </ProductPageProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
