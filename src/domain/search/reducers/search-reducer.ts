import { SearchType } from "../types/search-type";
import { SearchActionType } from "../types/search-action-type";
import { SearchActionEnum } from "../enums/search-action-enum";
import { DEFAULT_ORDER_BY } from "../consts";
import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";

export function searchReducer(
  search: SearchType,
  action: SearchActionType
): SearchType {
  switch (action.type) {
    case SearchActionEnum.UPDATED_KEYWORD:
      return handleUpdatedKeyword(search, action);
    case SearchActionEnum.UPDATED_ORDERBY:
      return handleUpdatedOrderBy(search, action);
    case SearchActionEnum.UPDATED_CATEGORIES:
      return handleUpdatedCategories(search, action);
    case SearchActionEnum.UPDATED_PRICE:
      return handleUpdatedPrice(search, action);
    case SearchActionEnum.UPDATED_YEAR:
      return handleUpdateYear(search, action);
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function handleUpdatedKeyword(search: SearchType, action: SearchActionType) {
  return {
    ...search,
    keyword: action.payload.keyword,
    categories: [""],
    minprice: MIN_PRICE,
    maxprice: MAX_PRICE,
    minyear: MIN_YEAR,
    maxyear: MAX_YEAR,
    orderby: DEFAULT_ORDER_BY,
  };
}

function handleUpdatedOrderBy(search: SearchType, action: SearchActionType) {
  return { ...search, orderby: action.payload.orderby };
}

function handleUpdatedCategories(search: SearchType, action: SearchActionType) {
  return { ...search, categories: action.payload.categories };
}

function handleUpdatedPrice(search: SearchType, action: SearchActionType) {
  return {
    ...search,
    minprice: action.payload.minprice,
    maxprice: action.payload.maxprice,
  };
}

function handleUpdateYear(search: SearchType, action: SearchActionType) {
  return {
    ...search,
    minyear: action.payload.minyear,
    maxyear: action.payload.maxyear,
  };
}