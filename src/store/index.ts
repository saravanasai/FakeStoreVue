import { createStore } from "vuex";
import ProductModule from "./Products/ProductModule";

export default createStore({
  modules: {
    products: ProductModule,
  },
});
