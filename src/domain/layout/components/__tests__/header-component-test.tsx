import { render, screen } from "@/lib/test";
import { HeaderComponent } from "../header-component";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";
import { LayoutProvider } from "../../contexts/layout-context";

describe("HeaderComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <LayoutProvider categories={categoriesWithPageMock}>
        <HeaderComponent />
      </LayoutProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
