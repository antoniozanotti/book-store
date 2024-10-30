import {
  getProductsByRequestUrl,
  getCursor,
} from "@/domain/search/services/search-service";
import { InfiniteSearchResponseType } from "@/domain/search/types/infinite-search-response-type";
import { PRODUCTS_PER_PAGE } from "@/domain/search/consts";

export async function GET(request: Request) {
  const [data, count] = await getProductsByRequestUrl(request.url);
  const cursor = getCursor(request.url);
  const response: InfiniteSearchResponseType = { data: data, count: count };
  const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);
  const currentPage = cursor / PRODUCTS_PER_PAGE + 1;
  if (totalPages > currentPage) {
    return Response.json({
      ...response,
      nextCursor: cursor + PRODUCTS_PER_PAGE,
    });
  }
  return Response.json(response);
}
