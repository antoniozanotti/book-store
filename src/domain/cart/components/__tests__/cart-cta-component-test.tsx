import { render } from "@/lib/test";
import { CartCtaComponent } from "../cart-cta-component";

describe("CartCtaComponent", () => {
  it("should render", async () => {
    const { container } = render(<CartCtaComponent />);
    expect(container).toMatchSnapshot();
  });
});
