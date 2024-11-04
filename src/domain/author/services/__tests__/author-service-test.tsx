/**
 * @jest-environment node
 */

import { authorsWithPageMock } from "../../__tests__/authors-with-page-mock";
import { getAuthorBySlug, getAuthorsWithPage } from "../author-service";

describe("AuthorService", () => {
  it("should return author with products", async () => {
    const author = await getAuthorBySlug(authorsWithPageMock[0].page.slug);
    expect(author).toMatchSnapshot();
  });

  it("should return authors with pages", async () => {
    const authors = await getAuthorsWithPage(6);
    expect(authors).toMatchSnapshot();
  });
});
