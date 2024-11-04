import prisma from "@/lib/db";
import { AuthorWithProductsPrisma } from "../types/author-prisma";
import { AuthorWithPagePrisma } from "../types/author-prisma";

export async function getAuthorBySlug(
  slug: string
): Promise<AuthorWithProductsPrisma> {
  return await prisma.author.findFirstOrThrow({
    where: {
      page: {
        slug: slug,
      },
    },
    include: {
      books: {
        include: {
          authors: true,
          product: {
            include: {
              book: {
                include: {
                  authors: true,
                },
              },
              page: true,
            },
          },
        },
      },
    },
  });
}

export async function getAuthorsWithPage(
  limit: number
): Promise<AuthorWithPagePrisma[]> {
  return await prisma.author.findMany({
    include: {
      page: true,
    },
    take: limit
  });
}
