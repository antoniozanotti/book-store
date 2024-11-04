import { render, screen } from "@/lib/test";
import { UiWrapperComponent } from "../ui-wrapper-component";

describe("UiWrapperComponent", () => {
  it("should render", async () => {
    const { container } = render(<UiWrapperComponent>Test</UiWrapperComponent>);
    expect(container).toMatchSnapshot();
  });
});