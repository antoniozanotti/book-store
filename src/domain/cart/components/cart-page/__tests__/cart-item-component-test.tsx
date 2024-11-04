import { render } from "@/lib/test";
import { CartItemComponent } from "../cart-item-component";
import { CartProvider } from "@/domain/cart/contexts/cart-context";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";
import { TanstackProvider } from "@/lib/tanstack-provider";

jest.mock("@/domain/product/queries/use-product-by-id-query", () => {
  const originalModule = jest.requireActual(
    "@/domain/product/queries/use-product-by-id-query"
  );
  return {
    __esModule: true,
    useProductByIdQuery: jest.fn((id: number) => {
      return {
        isLoading: false,
        data: productWithPagEandBookMock,
      };
    }),
  };
});

describe("CartItemComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <TanstackProvider>
        <CartProvider>
          <CartItemComponent
            cartItem={{ id: productWithPagEandBookMock.id, quantity: 1 }}
          />
        </CartProvider>
      </TanstackProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
