import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";
import { getProductById } from "@/domain/product/services/product-service";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = JSON.parse(context.params.id);

  try {
    const product: ProductWithPageAndBookPrisma = await getProductById(id);
    return Response.json({ product });
  } catch (error) {
    return Response.json({});
  }
}
