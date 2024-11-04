import { render } from "@/lib/test";
import { AuthorPageComponent } from "../author-page-component";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";
import { categoriesWithPageMock } from "@/domain/category/__tests__/categories-with-page-mock";
import { authorWithProductsMock } from "@/domain/author/__tests__/author-with-products-mock";
import { AuthorPageProvider } from "@/domain/author/contexts/author-page-context";

function authorPageComponentFactory() {
  return render(
    <LayoutProvider
      categories={JSON.parse(JSON.stringify(categoriesWithPageMock))}
    >
      <AuthorPageProvider
        author={JSON.parse(JSON.stringify(authorWithProductsMock))}
      >
        <AuthorPageComponent />
      </AuthorPageProvider>
    </LayoutProvider>
  );
}

describe("AuthorPageComponent", () => {
  it("should render", async () => {
    const { container } = authorPageComponentFactory();
    expect(container).toMatchSnapshot();
  });
});
