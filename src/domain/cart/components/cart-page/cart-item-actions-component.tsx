"use client";

import { UiPriceComponent } from "@/domain/ui/components/ui-price-component";
import { UiButtonComponent } from "@/domain/ui/components/ui-button-component";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useCartContext } from "../../contexts/cart-context";
import { CartActionEnum } from "../../enums/cart-action-enum";
import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";

export function CartItemActions({
  product,
  cartItemQty,
}: {
  product: ProductWithPageAndBookPrisma;
  cartItemQty: number;
}) {
  const cartDispatch = useCartContext().dispatch;
  return (
    <div className="flex gap-2 h-fit self-end col-span-2 lg:col-auto">
      <UiButtonComponent
        className="text-sm p-0 bg-transparent text-red-700"
        onClick={() =>
          cartDispatch({
            type: CartActionEnum.REMOVE_FROM_CART,
            payload: { id: product.id },
          })
        }
      >
        remove
      </UiButtonComponent>
      <div className="border-y border-primary-900 flex gap-2 items-center">
        <UiButtonComponent
          className="text-sm p-1.5"
          aria-label="decrease quantity"
          onClick={() =>
            cartDispatch({
              type: CartActionEnum.DECREASE_CART_ITEM_QUANTITY,
              payload: { id: product.id },
            })
          }
        >
          <MinusIcon />
        </UiButtonComponent>
        <div className="w-10 text-center text-sm" aria-label="quantity">
          {cartItemQty}
        </div>
        <UiButtonComponent
          className="text-sm p-1.5"
          aria-label="increase quantity"
          onClick={() =>
            cartDispatch({
              type: CartActionEnum.INCREASE_CART_ITEM_QUANTITY,
              payload: { id: product.id },
            })
          }
        >
          <PlusIcon />
        </UiButtonComponent>
      </div>
      <span className="font-bold grow flex items-end justify-end">
        <span aria-label="cart item subtotal">
          <UiPriceComponent
            value={cartItemQty * parseInt(product.price.toString())}
          />
        </span>
      </span>
    </div>
  );
}
