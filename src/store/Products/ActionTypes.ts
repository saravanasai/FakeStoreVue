import ProductDataInterface from "./ProductType";

export enum ProductActionEnum {
    GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  }
  
  export interface ProductActionType  {
    [ProductActionEnum.GET_ALL_PRODUCTS]():void;
  };
  