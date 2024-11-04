import { render, screen } from "@/lib/test";
import { FooterComponent } from "../footer-component";

describe("FooterComponent", () => {
  it("should render", async () => {
    const { container } = render(<FooterComponent />);
    expect(container).toMatchSnapshot();
  });
});