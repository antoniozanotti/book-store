import { render, screen } from "@/lib/test";
import { ProductImage } from "../product-image-component";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";

describe("ProductImage", () => {
  it("should render", async () => {
    const { container } = render(<ProductImage product={productWithPagEandBookMock} />);
    expect(container).toMatchSnapshot();
  });
});