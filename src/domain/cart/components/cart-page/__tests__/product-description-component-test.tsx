import { render, screen } from "@/lib/test";
import { ProductDescription } from "../product-description-component";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";

describe("ProductDescription", () => {
  it("should render", async () => {
    const { container } = render(<ProductDescription product={productWithPagEandBookMock} />);
    expect(container).toMatchSnapshot();
  });
});