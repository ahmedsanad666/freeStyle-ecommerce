<template>
  <div>
    <!-- Hero Section with Slider -->
    <section class="relative md:h-[75vh] h-[50vh] overflow-hidden">
      <!-- Slider Container -->
      <div class="relative h-full">
        <!-- Slide 1: Basic White T-Shirt -->
        <div
          v-show="currentSlide === 0"
          class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100"
        >
          <div class="container mx-auto px-4 flex items-center justify-between">
            <!-- Product Image -->
            <div class="w-1/2 flex justify-center">
              <img
                :src="heroSlides[0].image"
                :alt="heroSlides[0].title"
                class="max-w-md w-full h-auto object-contain"
              />
            </div>
            <!-- Product Text -->
            <div class="w-1/2 pl-8">
              <h1 class="md:text-5xl text-xl font-bold text-gray-900 mb-6 leading-tight">
                {{ heroSlides[0].title }}
              </h1>
              <p class="md:text-xl text-sm text-gray-600 mb-8 leading-relaxed">
                {{ heroSlides[0].description }}
              </p>
              <div class="md:text-3xl text-lg font-bold text-black mb-6">
                {{ heroSlides[0].price }}
              </div>
              <NuxtLink
                to="/products"
                class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
              >
                Shop Now
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Slide 2: Oversize T-Shirt -->
        <div
          v-show="currentSlide === 1"
          class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200"
        >
          <div class="container mx-auto px-4 flex items-center justify-between">
            <!-- Product Image -->
            <div class="w-1/2 flex justify-center">
              <img
                :src="heroSlides[1].image"
                :alt="heroSlides[1].title"
                class="max-w-md w-full h-auto object-contain"
              />
            </div>
            <!-- Product Text -->
            <div class="w-1/2 pl-8">
              <h1 class="md:text-5xl text-xl font-bold text-gray-900 mb-6 leading-tight">
                {{ heroSlides[1].title }}
              </h1>
              <p class="md:text-xl text-sm text-gray-600 mb-8 leading-relaxed">
                {{ heroSlides[1].description }}
              </p>
              <div class="md:text-3xl text-lg font-bold text-black mb-6">
                {{ heroSlides[1].price }}
              </div>
              <NuxtLink
                to="/products"
                class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
              >
                Shop Now
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Slide 3: Hoodie -->
        <div
          v-show="currentSlide === 2"
          class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300"
        >
          <div class="container mx-auto px-4 flex items-center justify-between">
            <!-- Product Image -->
            <div class="w-1/2 flex justify-center">
              <img
                :src="heroSlides[2].image"
                :alt="heroSlides[2].title"
                class="max-w-md w-full h-auto object-contain"
              />
            </div>
            <!-- Product Text -->
            <div class="w-1/2 pl-8">
              <h1 class="md:text-5xl text-xl font-bold text-gray-900 mb-6 leading-tight">
                {{ heroSlides[2].title }}
              </h1>
              <p class="md:text-xl text-sm text-gray-600 mb-8 leading-relaxed">
                {{ heroSlides[2].description }}
              </p>
              <div class="md:text-3xl text-lg font-bold text-black mb-6">
                {{ heroSlides[2].price }}
              </div>
              <NuxtLink
                to="/products"
                class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
              >
                Shop Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider Navigation Dots -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
      >
        <button
          v-for="(slide, index) in heroSlides"
          :key="index"
          @click="currentSlide = index"
          :class="[
            'w-3 h-3 rounded-full transition-colors duration-200',
            currentSlide === index ? 'bg-black' : 'bg-gray-400',
          ]"
        />
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="previousSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>

    <!-- Products Section -->
    <section class="container mx-auto px-4 py-16">
      <!-- Section Title -->
      <div class="mb-8 text-center">
        <h2 class="md:text-5xl text-2xl font-bold text-gray-900 mb-2">
          Ürünlerimiz
        </h2>
        <p class="text-gray-600">Discover our collection of premium clothing</p>
      </div>

      <!-- View All Products Button -->
      <div class="text-center mb-8">
        <NuxtLink
          to="/products"
          class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
        >
          View All Products
        </NuxtLink>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in displayedProducts"
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
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useProductsStore } from "~/stores/ProductsStore";
import { storeToRefs } from "pinia";

// Define types
interface ProductVariant {
  id: number;
  name: string;
  description: string;
  price: string;
  sizes: Array<{ id: number; name: string }>;
  Images: Array<{ id: number; url: string }>;
}

interface Product {
  id: number;
  name: string;
  description: string;
  categoryIds: number[];
  variants: ProductVariant[];
}

interface HeroSlide {
  image: string;
  title: string;
  description: string;
  price: string;
}

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);

// Hero slider state
const currentSlide = ref(0);
const autoSlideInterval = ref<NodeJS.Timeout | null>(null);

// Hero slides data
const heroSlides = ref<HeroSlide[]>([
  {
    image: "/images/products/tshirt/basic/white/pro1.png",
    title: "Premium Basic T-Shirt",
    description:
      "Comfortable and stylish basic t-shirt made with high-quality materials. Perfect for everyday wear.",
    price: "185₺",
  },
  {
    image: "/images/products/tshirt/oversize/black/front.png",
    title: "Trendy Oversize T-Shirt",
    description:
      "Modern oversize fit that combines comfort with contemporary style. Make a statement with this bold design.",
    price: "280₺",
  },
  {
    image: "/images/products/hoddie/white/front.png",
    title: "Cozy Hoodie Collection",
    description:
      "Stay warm and stylish with our premium hoodie collection. Perfect for casual outings and relaxed days.",
    price: "450₺",
  },
]);

// Display first 6 products
const displayedProducts = computed((): Product[] => {
  return products.value.slice(0, 6);
});

// Slider functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length;
};

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? heroSlides.value.length - 1
      : currentSlide.value - 1;
};

const startAutoSlide = () => {
  autoSlideInterval.value = setInterval(nextSlide, 5000); // Change slide every 5 seconds
};

const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value);
    autoSlideInterval.value = null;
  }
};

// Lifecycle hooks
onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
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
