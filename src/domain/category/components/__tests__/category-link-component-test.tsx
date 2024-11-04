import { render, screen } from "@/lib/test";
import { CategoryLinkComponent } from "../category-link-component";
import { categoriesWithPageMock } from "../../__tests__/categories-with-page-mock";

describe("CategoryLinkComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <CategoryLinkComponent category={categoriesWithPageMock[0]}>
        Test
      </CategoryLinkComponent>
    );
    expect(container).toMatchSnapshot();
  });
});
