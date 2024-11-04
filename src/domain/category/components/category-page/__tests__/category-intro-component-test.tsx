import { render, screen } from "@/lib/test";
import { CategoryIntroComponent } from "../category-intro-component";
import { CategoryPageProvider } from "@/domain/category/contexts/category-page-context";
import { categoryWithPageAndProductsMock } from "@/domain/category/__tests__/category-with-page-and-products-mock";

describe("CategoryIntroComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <CategoryPageProvider
        category={JSON.parse(JSON.stringify(categoryWithPageAndProductsMock))}
      >
        <CategoryIntroComponent />
      </CategoryPageProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
