import { ReactElement } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

export type UseProductsContextType = {
  products: ProductType[];
};

export type ChildrenType = {
  children?: ReactElement | ReactElement[];
};
