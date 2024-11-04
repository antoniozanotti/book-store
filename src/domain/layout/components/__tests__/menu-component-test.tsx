import { render, screen } from "@/lib/test";
import { MenuComponent } from "../menu-component";
import { LayoutProvider } from "../../contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";

describe("MenuComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <MenuComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
