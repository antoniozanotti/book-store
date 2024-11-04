import { render, screen } from "@/lib/test";
import { CategoriesWithLinkComponent } from "../categories-with-link-component";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";

describe("CategoriesWithLinkComponent", () => {
  it("should render", async () => {
    const { container } = render(<CategoriesWithLinkComponent categories={categoriesWithPageMock} />);
    expect(container).toMatchSnapshot();
  });
});