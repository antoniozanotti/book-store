import { render, screen } from "@/lib/test";
import { ExploreByCategoryComponent } from "../explore-by-category-component";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "../../__tests__/categories-with-page-mock";

describe("ExploreByCategoryComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <ExploreByCategoryComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
