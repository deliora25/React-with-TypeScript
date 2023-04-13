import { createContext, ReactElement } from "react";
import { UseCartContextType } from "./cart/types";
import { initCartContextState, initCartState } from "./cart/constants";
import { useCartContext } from "./cart/useCartContext";

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
