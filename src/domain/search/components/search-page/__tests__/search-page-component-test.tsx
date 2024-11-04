import { render, screen } from "@/lib/test";
import { SearchPageComponent } from "../search-page-component";
import { searchMock } from "@/domain/search/__tests__/search-mock";
import { useProductsInfiniteQueryMock } from "@/domain/search/__tests__/use-products-infinite-query-mock";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";

jest.mock("../../../contexts/search-context", () => {
  return {
    useSearchContext: jest.fn(() => {
      return { state: searchMock };
    }),
  };
});

jest.mock("../../../queries/use-products-infinite-query", () => {
  return {
    useProductsInfiniteQuery: jest.fn(() => {
      return useProductsInfiniteQueryMock;
    }),
  };
});

describe("SearchPageComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <SearchPageComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
