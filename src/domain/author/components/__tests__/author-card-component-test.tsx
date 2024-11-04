import { render } from "@/lib/test";
import { AuthorCardComponent } from "../author-card-component";
import { authorsWithPageMock } from "../../__tests__/authors-with-page-mock";

describe("AuthorCardComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <AuthorCardComponent author={authorsWithPageMock[0]} />
    );
    expect(container).toMatchSnapshot();
  });
});
