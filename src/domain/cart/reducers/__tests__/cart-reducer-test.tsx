import { cartReducer } from "../cart-reducer";
import { cartMock } from "../../__tests__/cart-mock";
import { CartActionEnum } from "../../enums/cart-action-enum";
import { CartType } from "../../types/cart-type";

describe("CartReducer", () => {
  it("should add product", async () => {
    let cart: CartType = { items: [] };

    cart = cartReducer(cart, {
      type: CartActionEnum.ADD_TO_CART,
      payload: { id: cartMock.items[0].id },
    });
    cart = cartReducer(cart, {
      type: CartActionEnum.ADD_TO_CART,
      payload: { id: cartMock.items[0].id },
    });
    cart = cartReducer(cart, {
      type: CartActionEnum.ADD_TO_CART,
      payload: { id: cartMock.items[1].id },
    });

    expect(cart).toStrictEqual(cartMock);
  });

  it("should remove product", async () => {
    let cart: CartType = { items: [] };

    cart = cartReducer(cart, {
      type: CartActionEnum.ADD_TO_CART,
      payload: { id: cartMock.items[0].id },
    });
    cart = cartReducer(cart, {
      type: CartActionEnum.REMOVE_FROM_CART,
      payload: { id: cartMock.items[0].id },
    });

    expect(cart).toStrictEqual({ items: [] });
  });

  it("should increase qty", async () => {
    let cart: CartType = { items: [] };

    cart = cartReducer(cart, {
      type: CartActionEnum.ADD_TO_CART,
      payload: { id: cartMock.items[0].id },
    });
    cart = cartReducer(cart, {
      type: CartActionEnum.INCREASE_CART_ITEM_QUANTITY,
      payload: { id: cartMock.items[0].id },
    });

    expect(cart).toStrictEqual({ items: [cartMock.items[0]] });
  });

  it("should decrease qty", async () => {
    let cart: CartType = cartMock;

    cart = cartReducer(cart, {
      type: CartActionEnum.INCREASE_CART_ITEM_QUANTITY,
      payload: { id: cartMock.items[0].id },
    });
    cart = cartReducer(cart, {
      type: CartActionEnum.DECREASE_CART_ITEM_QUANTITY,
      payload: { id: cartMock.items[0].id },
    });

    expect(cart).toStrictEqual(cartMock);
  });

  it("should throw error", async () => {
    let cart: CartType = cartMock;
    
    const error = () => {
      cartReducer(cart, {
        type: "error",
      });
    };

    expect(error).toThrow(Error);
  });
});
