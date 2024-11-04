import { render, screen } from "@/lib/test";
import { OrderByComponent } from "../order-by-component";
import { searchMock } from "@/domain/search/__tests__/search-mock";

jest.mock("../../../contexts/search-context", () => {
  return {
    useSearchContext: jest.fn(() => {
      return { state: searchMock };
    }),
  };
});

describe("OrderByComponent", () => {
  it("should render", async () => {
    const { container } = render(<OrderByComponent />);
    expect(container).toMatchSnapshot();
  });
});