"use client";

import { UiButtonComponent } from "@/domain/ui/components/ui-button-component";
import { useProductPageContext } from "../../contexts/product-page-context";
import { ProductWithBookAndCategoriesPrisma } from "../../types/product-prisma";
import { UiPriceComponent } from "@/domain/ui/components/ui-price-component";
import { CartActionEnum } from "@/domain/cart/enums/cart-action-enum";
import { useCartContext } from "@/domain/cart/contexts/cart-context";
import { useRouter } from "next/navigation";

export function AddToCartComponent({ ...props }: React.ComponentProps<"div">) {
  const product: ProductWithBookAndCategoriesPrisma =
    useProductPageContext().state.product;
  const cartDispatch = useCartContext().dispatch;
  const router = useRouter();
  
  return (
    <div {...props}>
      <div className="flex flex-col text-center border p-4" data-testid="add-to-cart-component">
        <span className="text-2xl p-2">
          <UiPriceComponent value={product.price.toString()} />
        </span>
        <UiButtonComponent
          className="p-2"
          onClick={() => {
            cartDispatch({
              type: CartActionEnum.ADD_TO_CART,
              payload: { id: product.id },
            });
            router.push('/cart');
          }}
        >
          ADD TO CART
        </UiButtonComponent>
        <span className="bg-primary-100 p-2 text-sm text-primary-900">Ships in 1 to 3 days</span>
      </div>
    </div>
  );
}
