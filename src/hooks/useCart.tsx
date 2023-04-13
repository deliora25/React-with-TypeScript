import { useContext } from "react";
import CartContext from "../context/cart/CartProvider";
import { UseCartContextType } from "../context/cart/CartProvider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCart;
