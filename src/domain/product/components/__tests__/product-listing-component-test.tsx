import { render, screen } from "@/lib/test";
import { ProductListingComponent } from "../product-listing-component";
import { productsWithPagEandBookMock } from "../../__tests__/products-with-page-and-book-mock";

describe("ProductListingComponent", () => {
  it("should render without endCard", async () => {
    const { container } = render(<ProductListingComponent products={productsWithPagEandBookMock} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with endCard", async () => {
    const { container } = render(<ProductListingComponent products={productsWithPagEandBookMock} endCard="Test" />);
    expect(container).toMatchSnapshot();
  });
});