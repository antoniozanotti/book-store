import { render, screen } from "@/lib/test";
import { WarningModalComponent } from "../warning-modal-component";

describe("WarningModalComponent", () => {
  it("should render", async () => {
    const { container } = render(<WarningModalComponent />);
    expect(container).toMatchSnapshot();
  });
});