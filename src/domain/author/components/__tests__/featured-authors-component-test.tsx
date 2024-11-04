import { render } from "@/lib/test";
import { FeaturedAuthorsComponent } from "../featured-authors-component";
import { FeaturedAuthorsProvider } from "@/domain/author/contexts/featured-authors-context";
import { authorsWithPageMock } from "../../__tests__/authors-with-page-mock";

function featuredAuthorsComponentFactory(){
  return render(<FeaturedAuthorsProvider authors={authorsWithPageMock}><FeaturedAuthorsComponent /></FeaturedAuthorsProvider>);
}

describe("FeaturedAuthorsComponent", () => {
  it("should render", async () => {
    const { container } = featuredAuthorsComponentFactory();
    expect(container).toMatchSnapshot();
  });
});
