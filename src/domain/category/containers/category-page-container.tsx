import { getCategoryWithPageAndProductsBySlug } from "../services/category-service";
import { CategoryPageProvider } from "../contexts/category-page-context";
import { CategoryPageComponent } from "../components/category-page/category-page-component";
import { notFound } from "next/navigation";

export async function CategoryPageContainer({ slug }: { slug: string }) {
  try {
    const category = await getCategoryWithPageAndProductsBySlug(slug);

    return (
      <CategoryPageProvider category={JSON.parse(JSON.stringify(category))}>
        <CategoryPageComponent />
      </CategoryPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
