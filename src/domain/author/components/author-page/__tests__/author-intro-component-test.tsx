import { render } from "@/lib/test";
import { AuthorIntroComponent } from "../author-intro-component";
import { authorWithProductsMock } from "@/domain/author/__tests__/author-with-products-mock";
import { AuthorPageProvider } from "@/domain/author/contexts/author-page-context";

function authorIntroComponentFactory() {
  return render(
    <AuthorPageProvider
      author={JSON.parse(JSON.stringify(authorWithProductsMock))}
    >
      <AuthorIntroComponent />
    </AuthorPageProvider>
  );
}

describe("AuthorIntroComponent", () => {
  it("should render", async () => {
    const { container } = authorIntroComponentFactory();
    expect(container).toMatchSnapshot();
  });
});
