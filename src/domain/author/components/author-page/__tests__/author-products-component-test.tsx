import { render, screen } from "@/lib/test";
import { AuthorProductsComponent } from "../author-products-component";
import { AuthorPageProvider } from "@/domain/author/contexts/author-page-context";
import { authorWithProductsMock } from "@/domain/author/__tests__/author-with-products-mock";

function authorProductsComponentFactory() {
  return render(
    <AuthorPageProvider
      author={JSON.parse(JSON.stringify(authorWithProductsMock))}
    >
      <AuthorProductsComponent />
    </AuthorPageProvider>
  );
}

describe("AuthorProductsComponent", () => {
  it("should render", async () => {
    const { container } = authorProductsComponentFactory();
    expect(container).toMatchSnapshot();
  });
});
