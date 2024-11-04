import { render, screen } from "@/lib/test";
import { ProductLinkComponent } from "../product-link-component";
import { productWithPagEandBookMock } from "../../__tests__/product-with-page-and-book-mock";

describe("ProductLinkComponent", () => {
  it("should render", async () => {
    const { container } = render(<ProductLinkComponent product={productWithPagEandBookMock}>Test</ProductLinkComponent>);
    expect(container).toMatchSnapshot();
  });
});