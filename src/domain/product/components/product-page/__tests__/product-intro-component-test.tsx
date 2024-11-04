import { render, screen } from "@/lib/test";
import { ProductIntroComponent } from "../product-intro-component";
import { ProductPageProvider } from "@/domain/product/contexts/product-page-context";
import { productWithBookAndCategoriesMock } from "@/domain/product/__tests__/product-with-book-and-categories-mock";

describe("ProductIntroComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <ProductPageProvider product={productWithBookAndCategoriesMock}>
        <ProductIntroComponent />
      </ProductPageProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
