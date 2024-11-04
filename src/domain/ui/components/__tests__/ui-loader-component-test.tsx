import { render, screen } from "@/lib/test";
import { UiLoaderComponent } from "../ui-loader-component";

describe("UiLoaderComponent", () => {
  it("should render", async () => {
    const { container } = render(<UiLoaderComponent />);
    expect(container).toMatchSnapshot();
  });
});