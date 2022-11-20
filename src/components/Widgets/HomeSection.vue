<template>
  <section class="jumbotron text-center mt-5">
    <div class="container">
      <h1 class="jumbotron-heading">Vuex Store Example</h1>
      <p class="lead text-muted">Using Decorators for vuex Store</p>
      <p class="d-flex justify-content-center">
        <router-link :to="{ name: 'store' }" class="btn btn-primary my-2 mx-2"
          >Store</router-link
        >
        <a href="#" class="btn btn-secondary my-2 mx-2">Cart</a>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeSection",
  setup() {},
});
</script>
