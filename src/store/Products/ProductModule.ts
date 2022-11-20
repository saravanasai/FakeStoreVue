import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import { ProductActionEnum, ProductActionType } from "./ActionTypes";
import { ProductMutationEnum, ProductMutationType } from "./MutationTypes";
import ProductDataInterface from "./ProductType";

import axios from "axios";

@Module
export default class ProductModule
  extends VuexModule
  implements ProductMutationType, ProductActionType
{
  productsList: ProductDataInterface[] = [];
  isLoading: boolean = false;



  get productList(){

    return this.productsList
  }

  @Mutation
  [ProductMutationEnum.SETPRODUCTS](
    productsList: ProductDataInterface[]
  ): void {
    this.productsList = productsList;
  }

  @Action
  [ProductActionEnum.GET_ALL_PRODUCTS](): void {
    axios.get("https://fakestoreapi.com/products").then((e) => {
      this.context.commit(ProductMutationEnum.SETPRODUCTS, e.data);
    });
  }
}
