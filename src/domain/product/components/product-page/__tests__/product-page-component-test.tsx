import { render, screen } from "@/lib/test";
import { ProductPageComponent } from "../product-page-component";
import { ProductPageProvider } from "@/domain/product/contexts/product-page-context";
import { productWithBookAndCategoriesMock } from "@/domain/product/__tests__/product-with-book-and-categories-mock";
import { Layout } from "lucide-react";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";

describe("ProductPageComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <ProductPageProvider product={productWithBookAndCategoriesMock}>
          <ProductPageComponent />
        </ProductPageProvider>
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
