import { render, screen } from "@/lib/test";
import { UiTitleComponent } from "../ui-title-component";

describe("UiTitleComponent", () => {
  it("should render p", async () => {
    const { container } = render(
      <>
        <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
          Test
        </UiTitleComponent>
        <UiTitleComponent level="h1" size="small">
          Stay Connected
        </UiTitleComponent>
        <UiTitleComponent level="h2" size="large">
          Featured Authors
        </UiTitleComponent>
        <UiTitleComponent size="large">Test</UiTitleComponent>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
