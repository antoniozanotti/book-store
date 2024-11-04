import { render } from "@/lib/test";
import { CartItemActions } from "../cart-item-actions-component";
import { CartProvider } from "@/domain/cart/contexts/cart-context";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";
import { TanstackProvider } from "@/lib/tanstack-provider";

describe("CartItemActions", () => {
  it("should render", async () => {
    const { container } = render(
      <TanstackProvider>
        <CartProvider>
          <CartItemActions
            product={productWithPagEandBookMock}
            cartItemQty={1}
          />
        </CartProvider>
      </TanstackProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
