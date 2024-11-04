import { render, screen } from "@/lib/test";
import { NotFoundPageComponent } from "../not-found-page-component";

describe("NotFoundPageComponent", () => {
  it("should render", async () => {
    const { container } = render(<NotFoundPageComponent />);
    expect(container).toMatchSnapshot();
  });
});