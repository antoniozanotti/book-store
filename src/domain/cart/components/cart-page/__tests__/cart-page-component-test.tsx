import { render, screen } from "@/lib/test";
import { CartPageComponent } from "../cart-page-component";

describe("CartPageComponent", () => {
  it("should render", async () => {
    const { container } = render(<CartPageComponent />);
    expect(container).toMatchSnapshot();
  });
});