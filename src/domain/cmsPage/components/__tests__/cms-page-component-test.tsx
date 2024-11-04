import { render, screen } from "@/lib/test";
import { CmsPageComponent } from "../cms-page-component";
import { CmsPageProvider } from "../../contexts/cms-page-context";
import { cmsPageWithPageMock } from "../../__tests__/cms-page-with-page-mock";

describe("CmsPageComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <CmsPageProvider cmsPage={JSON.parse(JSON.stringify(cmsPageWithPageMock))}>
        <CmsPageComponent />
      </CmsPageProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
