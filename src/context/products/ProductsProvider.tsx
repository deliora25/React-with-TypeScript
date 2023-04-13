import { ReactElement, createContext, useEffect, useState } from "react";
import { UseProductsContextType, ChildrenType, ProductType } from "./types";
import { initContextState, initState } from "./constants";

export const ProductsContext =
  createContext<UseProductsContextType>(initContextState);

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  //   useEffect(() => {
  //     const fetchProducts = async (): Promise<ProductType[]> => {
  //       const data = await fetch("htt[://localhost:3500/products")
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .catch((err) => {
  //           if (err instanceof Error) console.log(err.message);
  //         });
  //       return data;
  //     };
  //     fetchProducts().then((products) => setProducts(products));
  //   }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
