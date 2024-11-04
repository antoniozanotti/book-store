import { getCategoryUrl } from "../get-category-url";
import { categoriesWithPageMock } from "../../__tests__/categories-with-page-mock";

describe("getCategoryUrl", () => {
  it("should return category url", async () => {
    const url = getCategoryUrl(categoriesWithPageMock[0]);
    expect(url).toMatchSnapshot();
  });
});
