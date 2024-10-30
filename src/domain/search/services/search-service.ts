import { getIntValue } from "@/helpers/get-int-value";
import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";
import { DEFAULT_ORDER_BY } from "../consts";
import { OrderByEnum } from "../enums/order-by-enum";
import { PRODUCTS_PER_PAGE } from "@/domain/search/consts";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/db";

export function getSearchParams(searchParams: URLSearchParams): {
  keyword: string;
  categories: string[];
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  orderBy: OrderByEnum;
} {
  const keyword = searchParams.get("keyword") ?? "";
  const categories = searchParams.getAll("categories");
  const minPrice = getIntValue(searchParams.get("minprice"), MIN_PRICE);
  const maxPrice = getIntValue(searchParams.get("maxprice"), MAX_PRICE);
  const minYear = getIntValue(searchParams.get("minyear"), MIN_YEAR);
  const maxYear = getIntValue(searchParams.get("maxyear"), MAX_YEAR);
  const orderByParam = searchParams.get("orderby");
  let orderBy: OrderByEnum = DEFAULT_ORDER_BY;
  if (
    orderByParam !== null &&
    // @ts-ignore
    Object.values(OrderByEnum).includes(orderByParam)
  ) {
    // @ts-ignore
    orderBy = orderByParam;
  }
  return {
    keyword: keyword,
    categories: categories,
    minPrice: minPrice,
    maxPrice: maxPrice,
    minYear: minYear,
    maxYear: maxYear,
    orderBy: orderBy,
  };
}

export function getCursor(requestUrl: string) {
  const searchParams = getCustomSearchParams(requestUrl);
  return getIntValue(searchParams.get("cursor"), 0);
}

export async function getProductsByRequestUrl(requestUrl: string) {
  const searchParams = getCustomSearchParams(requestUrl);
  const cursor = getCursor(requestUrl);
  const { orderBy } = getSearchParams(searchParams);
  const orderByQuery = { [orderBy]: Prisma.SortOrder.asc };
  const whereQuery = { AND: getFilters(searchParams) };
  return await prisma.$transaction([
    prisma.product.findMany({
      include: {
        book: {
          include: {
            authors: true,
          },
        },
        page: true,
      },
      where: whereQuery,
      skip: cursor,
      take: PRODUCTS_PER_PAGE,
      orderBy: orderByQuery,
    }),
    prisma.product.count({
      where: whereQuery,
    }),
  ]);
}

function getCustomSearchParams(requestUrl: string) {
  return new URL(requestUrl).searchParams;
}

function getFilters(searchParams: URLSearchParams) {
  const { keyword, categories, minPrice, maxPrice, minYear, maxYear } =
    getSearchParams(searchParams);
  const keywordFilter = getKeywordFilter(keyword);
  const categoriesFilter = getCategoriesFilter(categories);
  const minPriceFilter = { price: { gte: minPrice } };
  const maxPriceFilter = { price: { lte: maxPrice } };
  const minYearFilter = { book: { year: { gte: minYear } } };
  const maxYearFilter = { book: { year: { lte: maxYear } } };
  return [
    keywordFilter,
    categoriesFilter,
    minPriceFilter,
    maxPriceFilter,
    minYearFilter,
    maxYearFilter,
  ];
}

function getKeywordFilter(keyword: string) {
  return keyword != ""
    ? {
        OR: [
          {
            name: {
              contains: keyword ?? "",
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            isbn: {
              contains: keyword ?? "",
            },
          },
          {
            book: {
              authors: {
                some: {
                  name: {
                    contains: keyword ?? "",
                    mode: Prisma.QueryMode.insensitive,
                  },
                },
              },
            },
          },
        ],
      }
    : {};
}

function getCategoriesFilter(categories: string[]) {
  return categories.filter((value) => value != "").length > 0
    ? {
        categories: {
          some: {
            page: {
              slug: {
                in: categories,
              },
            },
          },
        },
      }
    : {};
}
