import { SearchParamsType } from "@/types/search-params-type";
import { Metadata } from "next";
import { SearchPageComponent } from "@/domain/search/components/search-page/search-page-component";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParamsType;
}): Promise<Metadata> {
  const keyword = searchParams["keyword"]
    ? ` for ${searchParams["keyword"]}`
    : "";

  return {
    title: `Search Results${keyword}`,
  };
}

export default function Search() {
  return <SearchPageComponent />;
}
