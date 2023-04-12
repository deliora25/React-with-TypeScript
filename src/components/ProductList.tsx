import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  //use let if you will reassign pageContent
  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    //reassigned
    pageContent = products.map((product) => {
      //to check if product is in the cart
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main--products">{pageContent}</main>;

  return content;
};

export default ProductList;
