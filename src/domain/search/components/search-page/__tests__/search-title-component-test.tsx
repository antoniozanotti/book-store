import { render, screen } from "@/lib/test";
import { SearchTitleComponent } from "../search-title-component";
import { searchMock } from "@/domain/search/__tests__/search-mock";

jest.mock("../../../contexts/search-context", () => {
  return {
    useSearchContext: jest.fn(() => {
      return { state: searchMock };
    }),
  };
});

describe("SearchTitleComponent", () => {
  it("should render", async () => {
    const { container } = render(<SearchTitleComponent />);
    expect(container).toMatchSnapshot();
  });
});