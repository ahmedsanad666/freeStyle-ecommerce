<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Page Title -->
    <div class="mb-8 text-center">
      <h1 class="md:text-5xl text-2xl font-bold text-gray-900 mb-2">
        Ürünlerimiz
      </h1>
      <p class="text-gray-600">  discover our collection of premium clothing </p>
    </div>

    <!-- Categories Filter -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
      <div class="flex flex-wrap gap-2">
        <button
          @click="selectedCategory = null"
          :class="[
            'px-4 py-2 rounded-full border transition-colors duration-200',
            selectedCategory === null
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400',
          ]"
        >
          All Products
        </button>
        <button
          v-for="category in mainCategories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'px-4 py-2 rounded-full border transition-colors duration-200',
            selectedCategory === category.id
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400',
          ]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Product Image -->
        <NuxtLink :to="`/products/${product.id}`" class="block">
          <div class="relative aspect-square overflow-hidden">
            <img
              v-if="product.variants[0]?.Images?.[0]"
              :src="product.variants[0].Images[0].url"
              :alt="product.variants[0].name"
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
        </NuxtLink>

        <!-- Product Info -->
        <div class="p-4">
          <NuxtLink :to="`/products/${product.id}`" class="block">
            <h3
              class="font-semibold text-lg text-gray-900 mb-2 line-clamp-1 hover:text-gray-700 transition-colors duration-200"
            >
              {{ product.name || "Product Name" }}
            </h3>
          </NuxtLink>
          <p class="text-gray-600 text-sm mb-3 line-clamp-2">
            {{ product.description || "Product Description" }}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900">
              {{ product.variants[0]?.price || "Price" }}
            </span>
            <NuxtLink
              :to="`/products/${product.id}`"
              class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium inline-block text-center"
            >
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- No Products Message -->
    <div v-if="filteredProducts.length === 0" class="text-center py-12">
      <div class="text-gray-500 text-lg">
        No products found for the selected category.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "../../stores/ProductsStore";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

// Define types for better TypeScript support
interface Category {
  id: number;
  name: string;
  parent_id: number | null;
}

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

const productsStore = useProductsStore();
const { products, categories } = storeToRefs(productsStore);

// Reactive state
const selectedCategory = ref<number | null>(null);

// Computed properties
const mainCategories = computed((): Category[] => {
  return categories.value.filter(
    (category: Category) => category.parent_id === null
  );
});

// Get all products from store
const allProducts = computed((): Product[] => {
  return products.value;
});

// Filter products based on selected category
const filteredProducts = computed((): Product[] => {
  if (selectedCategory.value === null) {
    return allProducts.value;
  }

  return allProducts.value.filter((product: Product) =>
    product.categoryIds.includes(selectedCategory.value!)
  );
});

// Page title can be set in the layout or via head management
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
