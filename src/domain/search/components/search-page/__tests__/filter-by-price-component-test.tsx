import { render } from "@/lib/test";
import { FilterByPriceComponent } from "../filter-by-price-component";
import { searchMock } from "@/domain/search/__tests__/search-mock";

jest.mock("../../../contexts/search-context", () => {
  return {
    useSearchContext: jest.fn(() => {
      return { state: searchMock };
    }),
  };
});

describe("FilterByPriceComponent", () => {
  it("should render", async () => {

    const { container } = render(<FilterByPriceComponent />);
    expect(container).toMatchSnapshot();
  });
});
