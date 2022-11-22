<template>
  <div class="card mb-4 box-shadow">
    <img
      class="card-img-top"
      data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
      alt="Thumbnail [100%x225]"
      style="height: 225px; width: 100%; display: block"
      :src="image"
      data-holder-rendered="true"
    />
    <div class="card-body">
      <p class="card-text">
        {{ description }}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Price : {{ price }}
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Category : {{ category }}
          </button>
        </div>
        <small class="text-muted">{{ rating?.rate }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductCard",
  props: {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Object,
  },
});
</script>
