import { render, screen } from "@/lib/test";
import { SearchFiltersMobileComponent } from "../search-filters-mobile-component";

describe("SearchFiltersMobileComponent", () => {
  it("should render", async () => {
    const { container } = render(<SearchFiltersMobileComponent />);
    expect(container).toMatchSnapshot();
  });
});