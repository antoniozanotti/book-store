import { render, screen } from "@/lib/test";
import { AuthorsWithLinkComponent } from "../authors-with-link-component";
import { authorsWithPageMock } from "@/domain/author/__tests__/authors-with-page-mock";

describe("AuthorsWithLinkComponent", () => {
  it("should render", async () => {
    const { container } = render(<AuthorsWithLinkComponent authors={authorsWithPageMock} />);
    expect(container).toMatchSnapshot();
  });
});