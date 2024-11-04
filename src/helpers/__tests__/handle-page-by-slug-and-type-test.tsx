/**
 * @jest-environment node
 */
import { handlePageBySlugAndType } from "../handle-page-by-slug-and-type";
import { PageType } from "@/types/page-type";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";

describe("handlePageBySlugAndType", () => {
  it("should return title and description", async () => {
    const value = await handlePageBySlugAndType(productWithPagEandBookMock.page.slug, PageType.PRODUCT);
    expect(value).toMatchSnapshot();
  });
});