import { CartItemType } from "../../types/cart-item-type";
import { UiLoaderComponent } from "@/domain/ui/components/ui-loader-component";
import { useProductByIdQuery } from "@/domain/product/queries/use-product-by-id-query";
import { ProductImage } from "./product-image-component";
import { ProductDescription } from "./product-description-component";
import { CartItemActions } from "./cart-item-actions-component";

export function CartItemComponent({ cartItem }: { cartItem: CartItemType }) {
  const { isLoading, data } = useProductByIdQuery(cartItem.id);

  if (isLoading) return <UiLoaderComponent />;
  if (!data) return null;

  const product = data;

  return (
    <li className="py-4 border-b grid grid-cols-[145px_calc(100%-145px-16px)] gap-4">
      <ProductImage product={product} />
      <ProductDescription product={product} />
      <CartItemActions product={product} cartItemQty={cartItem.quantity} />
    </li>
  );
}
