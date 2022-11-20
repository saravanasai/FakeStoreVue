import ProductDataInterface from "./ProductType";

export enum ProductMutationEnum {
  SETPRODUCTS = "SET_PRODUCTS",
}

export interface ProductMutationType  {
  [ProductMutationEnum.SETPRODUCTS](productsList: ProductDataInterface[]): void;
};
