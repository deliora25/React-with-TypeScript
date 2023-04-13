import { useCartContext } from "./useCartContext";
import { REDUCER_ACTION_TYPE } from "./constants";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};
export type CartStateType = { cart: CartItemType[] };

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

//type of the initial context state and context
export type UseCartContextType = ReturnType<typeof useCartContext>;
