/**
 * @jest-environment node
 */
import { categoriesWithPageMock } from "../../__tests__/categories-with-page-mock";
import { getAllCategoriesWithPage, getCategoryWithPageAndProductsBySlug } from "../category-service";

describe("CategoryService", () => {
  it("should return categories with page", async () => {
    const categories = await getAllCategoriesWithPage();
    expect(categories).toMatchSnapshot();
  });

  it("should return category with page and products by slug", async () => {
    const categories = await getCategoryWithPageAndProductsBySlug(categoriesWithPageMock[0].page.slug);
    expect(categories).toMatchSnapshot();
  });
});