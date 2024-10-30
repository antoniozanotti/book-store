import { TanstackProvider } from "@/lib/tanstack-provider";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import { SearchProvider } from "@/domain/search/contexts/search-context";
import { CartProvider } from "@/domain/cart/contexts/cart-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TanstackProvider>
      <NextUIProvider>
        <Suspense fallback={<Loading />}>
          <SearchProvider>
            <CartProvider>{children}</CartProvider>
          </SearchProvider>
        </Suspense>
      </NextUIProvider>
    </TanstackProvider>
  );
}
