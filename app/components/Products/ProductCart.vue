<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <!-- Product Image -->
    <div class="relative aspect-square overflow-hidden">
      <img
        v-if="product.variants[0]?.Images?.[0]"
        :src="product.variants[0].Images[0].url"
        :alt="product.name"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div
        v-else
        class="w-full h-full bg-gray-200 flex items-center justify-center"
      >
        <span class="text-gray-400">No Image</span>
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <!-- Product Name -->
      <h3 class="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
        {{ product.name }}
      </h3>

      <!-- Product Description -->
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Price -->
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-gray-900">
          {{ product.variants[0]?.price }}
        </span>
        <button
          class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ProductVariant {
  id: number;
  name: string;
  description: string;
  price: string;
  sizes: Array<{ id: number; name: string }>;
  Images: Array<{ id: number; url: string }>;
  productId?: number;
  categoryIds?: number[];
}

interface Product {
  id: number;
  name: string;
  description: string;
  categoryIds: number[];
  variants: ProductVariant[];
}

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
