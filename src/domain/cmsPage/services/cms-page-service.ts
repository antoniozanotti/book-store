import { CmsPageWithPagePrisma } from "../types/cms-prisma";
import prisma from "@/lib/db";

export async function getCmsPageBySlug(
  slug: string
): Promise<CmsPageWithPagePrisma> {
  return await prisma.cmsPage.findFirstOrThrow({
    where: {
      page: {
        slug: slug,
      },
    },
    include: {
      page: true,
    },
  });
}
