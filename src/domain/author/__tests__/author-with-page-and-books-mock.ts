import { AuthorWithPageAndBooks } from "@/domain/product/types/product-prisma";

export const authorWithPageAndBooks: AuthorWithPageAndBooks = {
  id: 4,
  name: "Donna Tartt",
  description:
    "Mollitia alius uter. Auditor deleo vacuus amicitia virtus super. Vesica sto derelinquo uxor deserunt succurro caveo una.",
  pageId: 27,
  page: {
    id: 27,
    title: "Donna Tartt's Books",
    description:
      "Mollitia alius uter. Auditor deleo vacuus amicitia virtus super. Vesica sto derelinquo uxor deserunt succurro caveo una.",
    slug: "donna-tartt",
    type: "author",
  },
  books: [
    {
      id: 94,
      productId: 94,
      publisherId: 94,
      year: 1990,
      pages: 71,
      product: {
        id: 94,
        name: "The Secret History",
        description:
          "Coruscus custodia cras adiuvo cubicularis. Accommodo triumphus truculenter. Ventus nostrum dolores.",
        price: "247",
        isbn: "978-0-18-436415-0",
        pageId: 312,
        page: {
          id: 312,
          title: "Book The Secret History",
          description:
            "Coruscus custodia cras adiuvo cubicularis. Accommodo triumphus truculenter. Ventus nostrum dolores.",
          slug: "the-secret-history",
          type: "product",
        },
        book: {
          id: 94,
          productId: 94,
          publisherId: 94,
          year: 1990,
          pages: 71,
          authors: [
            {
              id: 4,
              name: "Donna Tartt",
              description:
                "Mollitia alius uter. Auditor deleo vacuus amicitia virtus super. Vesica sto derelinquo uxor deserunt succurro caveo una.",
              pageId: 27,
            },
          ],
        },
      },
    },
  ],
};
