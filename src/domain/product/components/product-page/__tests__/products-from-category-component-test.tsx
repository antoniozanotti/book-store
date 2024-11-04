import { render, screen } from "@/lib/test";
import { ProductsFromCategoryComponent } from "../products-from-category-component";
import { categoryWithPageAndProductsMock } from "@/domain/category/__tests__/category-with-page-and-products-mock";

describe("ProductsFromCategoryComponent", () => {
  it("should render", async () => {
    const { container } = render(<ProductsFromCategoryComponent category={categoryWithPageAndProductsMock} />);
    expect(container).toMatchSnapshot();
  });
});