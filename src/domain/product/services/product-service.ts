import prisma from "@/lib/db";
import {
  ProductWithBookAndCategoriesPrisma,
  ProductWithPageAndBookPrisma,
} from "../types/product-prisma";
import { PageType } from "@/types/page-type";

export async function getProductById(id: number) {
  return await prisma.product.findFirstOrThrow({
    where: {
      id: id,
    },
    include: {
      page: true,
      book: {
        include: {
          authors: true,
        },
      },
    },
  });
}

export async function getProductsWithPageAndBook(
  limit: number = 6
): Promise<ProductWithPageAndBookPrisma[]> {
  return await prisma.product.findMany({
    include: {
      book: {
        include: {
          authors: true,
        },
      },
      page: true,
    },
    take: limit,
    orderBy: {
      book: {
        year: "desc",
      },
    },
  });
}

export async function getProductWithRelatedProductsBySlug(
  slug: string,
  limitOfRelatedProducts: number = 3
): Promise<ProductWithBookAndCategoriesPrisma> {
  return await prisma.product.findFirstOrThrow({
    where: {
      page: {
        type: PageType.PRODUCT,
        slug: slug,
      },
    },
    include: {
      page: true,
      book: {
        include: {
          authors: {
            include: {
              page: true,
              books: {
                where: {
                  product: {
                    page: {
                      slug: {
                        not: slug,
                      },
                    },
                  },
                },
                take: limitOfRelatedProducts,
                include: {
                  product: {
                    include: {
                      page: true,
                      book: {
                        include: {
                          authors: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          publisher: {
            include: {
              page: true,
            },
          },
        },
      },
      categories: {
        include: {
          page: true,
          products: {
            where: {
              page: {
                slug: {
                  not: slug,
                },
              },
            },
            take: limitOfRelatedProducts,
            include: {
              page: true,
              book: {
                include: {
                  authors: true,
                },
              },
            },
          },
        },
      },
    },
  });
}
