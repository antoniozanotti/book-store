import { render, screen } from "@/lib/test";
import { CategoryPageComponent } from "../category-page-component";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";
import { CategoryPageProvider } from "@/domain/category/contexts/category-page-context";
import { categoryWithPageAndProductsMock } from "@/domain/category/__tests__/category-with-page-and-products-mock";

describe("CategoryPageComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <CategoryPageProvider
          category={JSON.parse(JSON.stringify(categoryWithPageAndProductsMock))}
        >
          <CategoryPageComponent />
        </CategoryPageProvider>
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
