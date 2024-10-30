"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { SearchContextType } from "../types/search-context-type";
import { useSearchParams } from "next/navigation";
import { getSearchParams } from "../services/search-service";
import { searchReducer } from "../reducers/search-reducer";

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export function SearchProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const { keyword, categories, minPrice, maxPrice, minYear, maxYear, orderBy } =
    getSearchParams(searchParams);
  const initialStateBySearchParams = {
    keyword: keyword,
    categories: categories,
    minprice: minPrice,
    maxprice: maxPrice,
    minyear: minYear,
    maxyear: maxYear,
    orderby: orderBy,
  };
  const [state, dispatch] = useReducer(
    searchReducer,
    initialStateBySearchParams
  );

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext(): SearchContextType {
  return useContext(SearchContext);
}
