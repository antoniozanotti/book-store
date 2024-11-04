/**
 * @jest-environment node
 */
import { cmsPageWithPageMock } from "../../__tests__/cms-page-with-page-mock";
import { getCmsPageBySlug } from "../cms-page-service";

describe("CmsPageService", () => {
  it("should return cms page by slug", async () => {
    const cmsPage = await getCmsPageBySlug(cmsPageWithPageMock.page.slug);
    expect(cmsPage).toMatchSnapshot();
  });
});