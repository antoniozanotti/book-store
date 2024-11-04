import { render, screen } from "@/lib/test";
import { CategoryProductsComponent } from "../category-products-component";
import { CategoryPageProvider } from "@/domain/category/contexts/category-page-context";
import { categoryWithPageAndProductsMock } from "@/domain/category/__tests__/category-with-page-and-products-mock";

describe("CategoryProductsComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <CategoryPageProvider
        category={JSON.parse(JSON.stringify(categoryWithPageAndProductsMock))}
      >
        <CategoryProductsComponent />
      </CategoryPageProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
