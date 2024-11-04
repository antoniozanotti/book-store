import { render } from "@/lib/test";
import { AuthorLinkComponent } from "../author-link-component";
import { authorsWithPageMock } from "../../__tests__/authors-with-page-mock";

describe("AuthorLinkComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <AuthorLinkComponent author={authorsWithPageMock[0]}>
        Teste
      </AuthorLinkComponent>
    );
    expect(container).toMatchSnapshot();
  });
});
