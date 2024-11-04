import { render, screen } from "@/lib/test";
import { MenuCtaComponent } from "../menu-cta-component";

describe("MenuCtaComponent", () => {
  it("should render", async () => {
    const { container } = render(<MenuCtaComponent />);
    expect(container).toMatchSnapshot();
  });
});