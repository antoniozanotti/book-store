import { render, screen } from "@/lib/test";
import { ProductListItemComponent } from "../product-list-item-component";

describe("ProductListItemComponent", () => {
  it("should render", async () => {
    const { container } = render(<ProductListItemComponent>Test</ProductListItemComponent>);
    expect(container).toMatchSnapshot();
  });
});