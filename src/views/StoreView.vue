<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <template v-for="product in productList" :key="product.id">
          <div class="col-md-4">
            <ProductCard
              :id="product.id"
              :description="product.description"
              :image="product.image"
              :price="product.price"
              :category="product.category"
              :rating="product.rating"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from "@/components/Widgets/ProductCard.vue";
import { ProductActionEnum } from "@/store/Products/ActionTypes";
import ProductDataInterface from "@/store/Products/ProductType";
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "StoreView",
  components: { ProductCard },
  setup() {
    onMounted(() => {
      store.dispatch(ProductActionEnum.GET_ALL_PRODUCTS);
    });

    const store = useStore();

    let productList: ProductDataInterface[] = store.getters.productList;

    return { productList };
  },
});
</script>
