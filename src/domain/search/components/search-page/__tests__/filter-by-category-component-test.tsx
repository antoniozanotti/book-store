import { render, screen } from "@/lib/test";
import { FilterByCategoryComponent } from "../filter-by-category-component";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";

describe("FilterByCategoryComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <FilterByCategoryComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
