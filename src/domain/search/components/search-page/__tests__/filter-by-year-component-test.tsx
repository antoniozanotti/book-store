import { render } from "@/lib/test";
import { FilterByYearComponent } from "../filter-by-year-component";
import { searchMock } from "@/domain/search/__tests__/search-mock";

jest.mock("../../../contexts/search-context", () => {
  return {
    useSearchContext: jest.fn(() => {
      return { state: searchMock };
    }),
  };
});

describe("FilterByYearComponent", () => {
  it("should render", async () => {
    const { container } = render(<FilterByYearComponent />);

    expect(container).toMatchSnapshot();
  });
});
