
import { render, screen } from "@/lib/test";
import { UiButtonComponent } from "../ui-button-component";

describe("UiButtonComponent", () => {
  it("should render", async () => {
    const { container } = render(<UiButtonComponent>Test</UiButtonComponent>);
    expect(container).toMatchSnapshot();
  });
});