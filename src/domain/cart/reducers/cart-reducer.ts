import { CartType } from "../types/cart-type";
import { CartActionType } from "../types/cart-action-type";
import { CartActionEnum } from "../enums/cart-action-enum";

export function cartReducer(cart: CartType, action: CartActionType) {
  switch (action.type) {
    case CartActionEnum.ADD_TO_CART:
      return handleAddToCart(cart, action);
    case CartActionEnum.REMOVE_FROM_CART:
      return handleRemoveFromCart(cart, action);
    case CartActionEnum.INCREASE_CART_ITEM_QUANTITY:
      return handleIncreaseCartItemQuantity(cart, action);
    case CartActionEnum.DECREASE_CART_ITEM_QUANTITY:
      return handleDecreaseCartItemQuantity(cart, action);
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function handleAddToCart(cart: CartType, action: CartActionType) {
  if (cart.items.find((item) => item.id === action.payload.id) === undefined) {
    return {
      ...cart,
      items: [...cart.items, { id: action.payload.id, quantity: 1 }],
    };
  }
  return {
    ...cart,
    items: cart.items.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }),
  };
}

function handleRemoveFromCart(cart: CartType, action: CartActionType) {
  return {
    ...cart,
    items: cart.items.filter((item) => item.id != action.payload.id),
  };
}

function handleIncreaseCartItemQuantity(
  cart: CartType,
  action: CartActionType
) {
  return {
    ...cart,
    items: cart.items.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }),
  };
}

function handleDecreaseCartItemQuantity(
  cart: CartType,
  action: CartActionType
) {
  return {
    ...cart,
    items: cart.items
      .filter((item) => {
        return item.quantity > 1 || item.id != action.payload.id;
      })
      .map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
  };
}
