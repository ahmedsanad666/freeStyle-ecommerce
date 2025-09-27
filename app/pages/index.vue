<template>
  <div class="p-8">
    
    <div v-for="product in products" :key="product.id">
      <img :src="product.image" alt="product image" />
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.quantity }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import whatsapp from "@/assets/svgs/whatsapp.svg";

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
console.log(products.value);
</script>

<style lang="scss">
h1 {
  dev {
    color: red;
  }
}
</style>
