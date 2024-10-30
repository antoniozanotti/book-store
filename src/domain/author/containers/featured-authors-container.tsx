import { getAuthorsWithPage } from "../services/author-service";
import { FeaturedAuthorsProvider } from "../contexts/featured-authors-context";
import { FeaturedAuthorsComponent } from "../components/featured-authors-component";

export async function FeaturedAuthorsContainer() {
  const limit = 6;
  const authors = await getAuthorsWithPage(limit);

  return (
    <FeaturedAuthorsProvider authors={JSON.parse(JSON.stringify(authors))}>
      <FeaturedAuthorsComponent />
    </FeaturedAuthorsProvider>
  );
}
