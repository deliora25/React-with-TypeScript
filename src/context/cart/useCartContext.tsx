import { CartStateType } from "./types";
import { useReducer, useMemo } from "react";
import { reducer } from "./reducer";
import { REDUCER_ACTION_TYPE } from "./constants";

//define useReducer hook
const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  //useMemo to cache the REDUCER_ACTION_TYPE
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  //get total number of items
  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);
  //define the total price and set currency
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );
  //sort the cart
  const cart = state.cart.sort((a, b) => {
    //extract last 4 numbers from sku
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};
