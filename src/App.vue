<template>
  <div class="">
    <HeaderNav />
    <main role="main">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "./components/Layouts/HeaderNav.vue";


export default defineComponent({
  components: {HeaderNav},
  setup() {

  
    
  },
});
</script>

<style></style>
