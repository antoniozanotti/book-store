import { getProductsWithPageAndBook } from "../services/product-service";
import { NewReleaseBooksProvider } from "../contexts/new-release-books-context";
import { NewReleaseBooksComponent } from "../components/new-release-books-component";

export async function NewReleaseBooksContainer() {
  const books = await getProductsWithPageAndBook();

  return (
    <NewReleaseBooksProvider books={JSON.parse(JSON.stringify(books))}>
      <NewReleaseBooksComponent />
    </NewReleaseBooksProvider>
  );
}
