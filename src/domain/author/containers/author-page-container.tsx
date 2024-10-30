import { getAuthorBySlug } from "../services/author-service";
import { AuthorPageProvider } from "../contexts/author-page-context";
import { AuthorPageComponent } from "../components/author-page/author-page-component";
import { notFound } from "next/navigation";

export async function AuthorPageContainer({ slug }: { slug: string }) {
  try {
    const author = await getAuthorBySlug(slug);

    return (
      <AuthorPageProvider author={JSON.parse(JSON.stringify(author))}>
        <AuthorPageComponent />
      </AuthorPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
