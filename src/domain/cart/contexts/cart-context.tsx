"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { CartType } from "../types/cart-type";
import { CartContextType } from "../types/cart-context-type";
import { useLocalStorage } from "usehooks-ts";
import { useProductsByIdsQuery } from "@/domain/product/queries/use-products-by-ids-query";
import { cartReducer } from "../reducers/cart-reducer";

const initialState: CartType = { items: [] };

const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => {},
  getCartItemsQty: () => {},
  cartItemsSubtotal: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [localState, setLocalState] = useLocalStorage<CartType>(
    "cart",
    initialState
  );
  const [state, dispatch] = useReducer(cartReducer, localState);
  const cartItems = state.items;
  const responses = useProductsByIdsQuery(cartItems.map((item) => item.id));

  function getCartItemsQty(): number {
    const cartItems = state.items;
    return cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
  }

  function cartItemsSubtotal(): number {
    let subTotal = 0;
    cartItems.forEach((item) => {
      responses.some((response) => {
        const product = response.data;
        if (!product) {
          return true;
        }
        if (item.id == product.id) {
          subTotal += parseInt(product.price.toString()) * item.quantity;
          return true;
        }
      });
    });
    return subTotal;
  }

  useEffect(() => {
    setLocalState(state);
  }, [state, setLocalState]);

  return (
    <CartContext.Provider
      value={{ state, dispatch, getCartItemsQty, cartItemsSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(): CartContextType {
  return useContext(CartContext);
}
