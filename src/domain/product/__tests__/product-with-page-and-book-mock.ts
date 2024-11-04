import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export const productWithPagEandBookMock: ProductWithPageAndBookPrisma = {
  id: 138,
  name: "The Four Agreements: A Practical Guide to Personal Freedom",
  description:
    "Canto eum versus somniculosus mollitia conforto celebrer iste. Surculus facere vix acceptus. Cohaero demo sufficio venio autus animi ex adversus quam.",
  price: "302",
  isbn: "978-1-315-92574-5",
  pageId: 448,
  page: {
    id: 448,
    title: "Book The Four Agreements: A Practical Guide to Personal F...",
    description:
      "Canto eum versus somniculosus mollitia conforto celebrer iste. Surculus facere vix acceptus. Cohaero demo sufficio venio autus animi ex adversus quam.",
    slug: "the-four-agreements-a-practical-guide-to-personal-freedom",
    type: "product",
  },
  book: {
    id: 138,
    productId: 138,
    publisherId: 138,
    year: 2024,
    pages: 400,
    authors: [
      {
        id: 146,
        name: "Don Miguel Ruiz",
        description:
          "Victus nisi carus consequuntur tubineus nostrum. Harum umquam vaco patruus absens. Corrigo vereor molestiae cresco varietas depraedor cetera.",
        pageId: 450,
      },
    ],
  },
};
