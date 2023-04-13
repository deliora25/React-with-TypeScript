import { useContext } from "react";
import {
  UseProductsContextType,
  ProductsContext,
} from "../context/products/ProductsProvider";

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
