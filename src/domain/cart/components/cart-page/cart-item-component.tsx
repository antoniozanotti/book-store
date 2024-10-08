"use client";
import { UiPriceComponent } from "@/domain/ui/components/ui-price-component";
import { UiButtonComponent } from "@/domain/ui/components/ui-button-component";
import { CartItemType } from "../../types/cart-item-type";
import { ProductLinkComponent } from "@/domain/product/components/product-link-component";
import { getAuthorsByProduct } from "@/domain/product/helpers/get-authors-by-product";
import { UiLoaderComponent } from "@/domain/ui/components/ui-loader-component";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useCartContext } from "../../contexts/cart-context";
import { CartActionEnum } from "../../enums/cart-action-enum";
import { useProductByIdQuery } from "@/domain/product/queries/use-product-by-id-query";
import CldImage from "@/lib/cld-image";

export function CartItemComponent({ cartItem }: { cartItem: CartItemType }) {
  const cartDispatch = useCartContext().dispatch;
  const { isLoading, data } = useProductByIdQuery(cartItem.id);

  if (isLoading) return <UiLoaderComponent />;
  if (!data) return null;

  const product = data;

  return (
    <li className="py-4 border-b grid grid-cols-[145px_calc(100%-145px-16px)] gap-4">
      <ProductLinkComponent
        product={product}
        className="w-[145px] lg:row-span-2"
      >
        <figure className="bg-green-300 w-[145px] h-[193px] relative">
          <CldImage
            src={`product/${product.page.slug}`}
            width={145}
            height={193}
            alt={product.name}
            className="object-cover w-full h-full"
            sizes="145px"
            crop="auto"
          />
        </figure>
      </ProductLinkComponent>
      <div className="h-fit">
        <ProductLinkComponent product={product} className="line-clamp-2">
          <h2>{product.name}</h2>
        </ProductLinkComponent>
        <span className="line-clamp-2 block text-sm">
          by {getAuthorsByProduct(product)}
        </span>
        <span className="block text-sm my-2">ISBN: {product.isbn}</span>
      </div>
      <div className="flex gap-2 h-fit self-end col-span-2 lg:col-auto">
        <UiButtonComponent
          className="text-sm p-0 bg-transparent text-red-700"
          onClick={() => {
            cartDispatch({
              type: CartActionEnum.REMOVE_FROM_CART,
              payload: { id: product.id },
            });
          }}
        >
          remove
        </UiButtonComponent>
        <div className="border-y border-primary-900 flex gap-2 items-center">
          <UiButtonComponent
            className="text-sm p-1.5"
            aria-label="decrease quantity"
            onClick={() => {
              cartDispatch({
                type: CartActionEnum.DECREASE_CART_ITEM_QUANTITY,
                payload: { id: product.id },
              });
            }}
          >
            <MinusIcon />
          </UiButtonComponent>
          <div className="w-10 text-center text-sm" aria-label="quantity">
            {cartItem.quantity}
          </div>
          <UiButtonComponent
            className="text-sm p-1.5"
            aria-label="increase quantity"
            onClick={() => {
              cartDispatch({
                type: CartActionEnum.INCREASE_CART_ITEM_QUANTITY,
                payload: { id: product.id },
              });
            }}
          >
            <PlusIcon />
          </UiButtonComponent>
        </div>
        <span className="font-bold grow flex items-end justify-end">
          <span aria-label="cart item subtotal">
            <UiPriceComponent
              value={cartItem.quantity * parseInt(product.price.toString())}
            />
          </span>
        </span>
      </div>
    </li>
  );
}
