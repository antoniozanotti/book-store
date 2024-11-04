import { render, screen } from "@/lib/test";
import { InputSearchComponent } from "../input-search-component";

describe("InputSearchComponent", () => {
  it("should render", async () => {
    const { container } = render(<InputSearchComponent />);
    expect(container).toMatchSnapshot();
  });
});