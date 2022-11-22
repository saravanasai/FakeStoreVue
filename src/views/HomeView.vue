<template>
  <HomeSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeSection from "@/components/Widgets/HomeSection.vue";
export default defineComponent({
  name: "HomeView",
  components: { HomeSection },
});
</script>
