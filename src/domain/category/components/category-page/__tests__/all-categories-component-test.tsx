import { render, screen } from "@/lib/test";
import { AllCategoriesComponent } from "../all-categories-component";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";
import { CategoryPageProvider } from "@/domain/category/contexts/category-page-context";
import { categoryWithPageAndProductsMock } from "@/domain/category/__tests__/category-with-page-and-products-mock";

describe("AllCategoriesComponent", () => {
  it("should render all categories", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <AllCategoriesComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render all categories and bold current category", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <CategoryPageProvider category={JSON.parse(JSON.stringify(categoryWithPageAndProductsMock))}>
          <AllCategoriesComponent />
        </CategoryPageProvider>
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
