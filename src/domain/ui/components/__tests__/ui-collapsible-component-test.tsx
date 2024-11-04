import { render, screen } from "@/lib/test";
import { UiCollapsibleComponent } from "../ui-collapsible-component";

describe("UiCollapsibleComponent", () => {
  it("should render", async () => {
    const { container } = render(<UiCollapsibleComponent theContent="Content" theHeader="Header" />);
    expect(container).toMatchSnapshot();
  });
});