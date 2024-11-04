import { render, screen } from "@/lib/test";
import { ProductCardComponent } from "../product-card-component";
import { productWithPagEandBookMock } from "../../__tests__/product-with-page-and-book-mock";

describe("ProductCardComponent", () => {
  it("should render", async () => {
    const { container } = render(<ProductCardComponent product={productWithPagEandBookMock} />);
    expect(container).toMatchSnapshot();
  });
});