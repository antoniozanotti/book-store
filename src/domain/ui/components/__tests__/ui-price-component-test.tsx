import { render, screen } from "@/lib/test";
import { UiPriceComponent } from "../ui-price-component";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";

describe("UiPriceComponent", () => {
  it("should render", async () => {
    const { container } = render(<UiPriceComponent value={productWithPagEandBookMock.price.toString()} />);
    expect(container).toMatchSnapshot();
  });
});