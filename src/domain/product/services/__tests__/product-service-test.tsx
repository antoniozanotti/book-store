/**
 * @jest-environment node
 */
import { productWithBookAndCategoriesMock } from "../../__tests__/product-with-book-and-categories-mock";
import { getProductById, getProductWithRelatedProductsBySlug, getProductsWithPageAndBook } from "../product-service";

describe("ProductService", () => {
  it("should return product by id", async () => {
    const product = await getProductById(productWithBookAndCategoriesMock.id);
    expect(product).toMatchSnapshot();
  });

  it("should return product with related products by slug", async () => {
    const product = await getProductWithRelatedProductsBySlug(productWithBookAndCategoriesMock.page.slug);
    expect(product).toMatchSnapshot();
  });

  it("should return products with page and book", async () => {
    const products = await getProductsWithPageAndBook();
    expect(products).toMatchSnapshot();
  });
});