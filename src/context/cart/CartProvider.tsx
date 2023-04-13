import { createContext, ReactElement } from "react";
import { UseCartContextType } from "./types";
import { initCartContextState, initCartState } from "./constants";
import { useCartContext } from "./useCartContext";
import { ChildrenType } from "../products/types";

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
