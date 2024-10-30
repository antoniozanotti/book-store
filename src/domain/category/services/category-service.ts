import { CategoryWithPageAndProductsPrisma, CategoryWithPagePrisma } from "../types/category-prisma";
import prisma from "@/lib/db";

export async function getCategoryWithPageAndProductsBySlug(
  slug: string
): Promise<CategoryWithPageAndProductsPrisma> {
  return await prisma.category.findFirstOrThrow({
    where: {
      page: {
        slug: slug,
      },
    },
    include: {
      page: true,
      products: {
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
  });
}

export async function getAllCategoriesWithPage(): Promise<CategoryWithPagePrisma[]> {
  return await prisma.category.findMany({
    include: {
      page: true,
    },
  });
}
