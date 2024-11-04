import { render, screen } from "@/lib/test";
import { NewReleaseBooksComponent } from "../new-release-books-component";
import { NewReleaseBooksProvider } from "../../contexts/new-release-books-context";
import { productsWithPagEandBookMock } from "../../__tests__/products-with-page-and-book-mock";

describe("NewReleaseBooksComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <NewReleaseBooksProvider books={productsWithPagEandBookMock}>
        <NewReleaseBooksComponent />
      </NewReleaseBooksProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
