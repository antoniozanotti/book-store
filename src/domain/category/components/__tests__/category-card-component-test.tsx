import { render, screen } from "@/lib/test";
import { CategoryCardComponent } from "../category-card-component";
import { categoriesWithPageMock } from "../../__tests__/categories-with-page-mock";

describe("CategoryCardComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <CategoryCardComponent category={categoriesWithPageMock[0]} />
    );
    expect(container).toMatchSnapshot();
  });
});
