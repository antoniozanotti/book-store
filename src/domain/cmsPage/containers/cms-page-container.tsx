import { getCmsPageBySlug } from "../services/cms-page-service";
import { CmsPageProvider } from "../contexts/cms-page-context";
import { CmsPageComponent } from "../components/cms-page-component";
import { notFound } from "next/navigation";

export async function CmsPageContainer({ slug }: { slug: string }) {
  try {
    const cmsPage = await getCmsPageBySlug(slug);

    return (
      <CmsPageProvider cmsPage={JSON.parse(JSON.stringify(cmsPage))}>
        <CmsPageComponent />
      </CmsPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
