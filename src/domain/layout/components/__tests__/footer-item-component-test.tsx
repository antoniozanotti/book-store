import { render, screen } from "@/lib/test";
import { FooterItemComponent } from "../footer-item-component";

describe("FooterItemComponent", () => {
  it("should render", async () => {
    const { container } = render(<FooterItemComponent title="Test" />);
    expect(container).toMatchSnapshot();
  });
});