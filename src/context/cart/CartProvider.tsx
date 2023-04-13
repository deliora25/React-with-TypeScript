import { createContext, ReactElement } from "react";
import { UseCartContextType } from "./types";
import { initCartContextState, initCartState } from "./constants";
import { useCartContext } from "./useCartContext";

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
