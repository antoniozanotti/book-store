import { render, screen } from "@/lib/test";
import { SearchFiltersDesktopComponent } from "../search-filters-desktop-component";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";
import { searchMock } from "@/domain/search/__tests__/search-mock";

jest.mock("../../../contexts/search-context", () => {
  return {
    useSearchContext: jest.fn(() => {
      return { state: searchMock };
    }),
  };
});

describe("SearchFiltersDesktopComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <SearchFiltersDesktopComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
