import { ReactNode, Suspense } from "react";
import { getAllCategoriesWithPage } from "@/domain/category/services/category-service";
import { TanstackProvider } from "@/lib/tanstack-provider";
import { NextUIProvider } from "@nextui-org/react";
import Loading from "./loading";
import { SearchProvider } from "@/domain/search/contexts/search-context";
import { CartProvider } from "@/domain/cart/contexts/cart-context";
import { LayoutProvider } from "@/domain/layout/contexts/layout-context";

export async function Providers({ children }: { children: ReactNode }) {
  const categories = await getAllCategoriesWithPage();

  return (
    <TanstackProvider>
      <NextUIProvider>
        <Suspense fallback={<Loading />}>
          <SearchProvider>
            <CartProvider>
              <LayoutProvider categories={JSON.parse(JSON.stringify(categories))}>
                {children}
              </LayoutProvider>
            </CartProvider>
          </SearchProvider>
        </Suspense>
      </NextUIProvider>
    </TanstackProvider>
  );
}
