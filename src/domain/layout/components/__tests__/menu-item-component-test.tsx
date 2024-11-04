import { render, screen } from "@/lib/test";
import { MenuItemComponent } from "../menu-item-component";

describe("MenuItemComponent", () => {
  it("should render without link", async () => {
    const { container } = render(<MenuItemComponent>Test</MenuItemComponent>);
    expect(container).toMatchSnapshot();
  });

  it("should render with link", async () => {
    const { container } = render(<MenuItemComponent href="test" title="test">Test</MenuItemComponent>);
    expect(container).toMatchSnapshot();
  });
});
