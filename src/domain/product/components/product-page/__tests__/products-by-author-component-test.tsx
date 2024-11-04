import { render, screen } from "@/lib/test";
import { ProductsByAuthorComponent } from "../products-by-author-component";
import { authorWithPageAndBooks } from "@/domain/author/__tests__/author-with-page-and-books-mock";

describe("ProductsByAuthorComponent", () => {
  it("should render", async () => {
    const { container } = render(<ProductsByAuthorComponent author={authorWithPageAndBooks} />);
    expect(container).toMatchSnapshot();
  });
});