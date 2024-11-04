import { productWithPagEandBookMock } from "../../__tests__/product-with-page-and-book-mock";
import { productsWithPagEandBookMock } from "../../__tests__/products-with-page-and-book-mock";
import { getAuthorsByProduct } from "../get-authors-by-product";

describe("getAuthorsByProduct", () => {
  it("should return authors by product", async () => {
    const authors = getAuthorsByProduct(productsWithPagEandBookMock[0]);
    expect(authors).toMatchSnapshot();
  });
});
