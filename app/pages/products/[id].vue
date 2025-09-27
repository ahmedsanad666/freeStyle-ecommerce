<template>
  <div v-if="product" class="container mx-auto px-4 py-8">
    <!-- Breadcrumb Navigation -->
    <nav class="mb-6">
      <ol class="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <NuxtLink to="/" class="hover:text-gray-900">Ana Sayfa</NuxtLink>
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{{ getCategoryName(product.categoryIds[0] || 1) }}</span>
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{{ product.name }}</span>
        </li>
      </ol>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Product Images Section -->
      <div class="space-y-4">
        <!-- Main Image -->
        <div
          class="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <img
            v-if="selectedVariant?.Images?.[0]"
            :src="selectedVariant.Images[0].url"
            :alt="selectedVariant.name"
            class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            @click="openLightbox(0)"
          />
          <div v-else class="w-full h-full flex items-center justify-center">
            <span class="text-gray-400 text-lg">No Image Available</span>
          </div>
        </div>

        <!-- Thumbnail Images -->
        <div
          v-if="selectedVariant?.Images && selectedVariant.Images.length > 1"
          class="grid grid-cols-4 gap-2"
        >
          <div
            v-for="(image, index) in selectedVariant.Images"
            :key="image.id"
            class="relative aspect-square overflow-hidden rounded-lg cursor-pointer border-2 transition-all duration-200"
            :class="
              index === 0
                ? 'border-black'
                : 'border-gray-200 hover:border-gray-400'
            "
            @click="selectImage(index)"
          >
            <img
              :src="image.url"
              :alt="`${selectedVariant?.name || 'Product'} ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Product Details Section -->
      <div class="space-y-6">
        <!-- Product Title -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">
            {{ product.name }}
          </h1>
          <p class="text-gray-600">Ürün Kodu: {{ product.id }}</p>
        </div>

        <!-- Rating (Placeholder) -->
        <div class="flex items-center space-x-1">
          <div class="flex">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
          <span class="text-sm text-gray-500 ml-2"
            >Henüz değerlendirme yok</span
          >
        </div>

        <!-- Price -->
        <div class="text-3xl font-bold text-gray-900">
          {{ selectedVariant?.price || "Fiyat Belirtilmemiş" }}
        </div>

        <!-- Stock Info -->
        <div class="text-sm text-green-600 font-medium">Stok: 20+</div>

        <!-- Variant Selection -->
        <div v-if="product.variants.length > 1" class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">Varyant Seçimi</h3>
          <div class="grid grid-cols-1 gap-3">
            <div
              v-for="variant in product.variants"
              :key="variant.id"
              class="border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02]"
              :class="
                selectedVariant?.id === variant.id
                  ? 'border-green-500 bg-green-50 shadow-lg ring-2 ring-green-200'
                  : 'border-gray-300 hover:border-gray-400 hover:shadow-md'
              "
              @click="selectVariant(variant)"
            >
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <h4
                      class="font-medium"
                      :class="
                        selectedVariant?.id === variant.id
                          ? 'text-green-800'
                          : 'text-gray-900'
                      "
                    >
                      {{ variant.name }}
                    </h4>
                    <div
                      v-if="selectedVariant?.id === variant.id"
                      class="flex items-center space-x-1"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-xs font-medium text-green-600"
                        >Seçili</span
                      >
                    </div>
                  </div>
                  <p
                    class="text-sm mt-1"
                    :class="
                      selectedVariant?.id === variant.id
                        ? 'text-green-700'
                        : 'text-gray-600'
                    "
                  >
                    {{ variant.description }}
                  </p>
                  <p
                    class="text-lg font-semibold mt-2"
                    :class="
                      selectedVariant?.id === variant.id
                        ? 'text-green-800'
                        : 'text-gray-900'
                    "
                  >
                    {{ variant.price }}
                  </p>
                </div>
                <div class="text-right ml-4">
                  <div
                    class="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    :class="
                      selectedVariant?.id === variant.id
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300'
                    "
                  >
                    <div
                      v-if="selectedVariant?.id === variant.id"
                      class="w-2 h-2 rounded-full bg-white"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Size Selection -->
        <div v-if="selectedVariant?.sizes?.length" class="space-y-3">
          <h3 class="text-lg font-semibold text-gray-900">Beden Seçimi</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="size in selectedVariant.sizes"
              :key="size.id"
              class="px-4 py-2 border rounded-md transition-all duration-200 text-sm font-medium"
              :class="
                selectedSize?.id === size.id
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              "
              @click="selectSize(size)"
            >
              {{ size.name }}
            </button>
          </div>
        </div>

        <!-- Order Now Button -->
        <div class="pt-4">
          <button
            @click="orderNow"
            class="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
            <span>WhatsApp ile Sipariş Ver</span>
          </button>
        </div>

        <!-- Product Description -->
        <div class="pt-6 border-t">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Ürün Açıklaması
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ selectedVariant?.description || product.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Lightbox for Image Gallery -->
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="lightboxImages"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />
  </div>

  <!-- Loading State -->
  <div v-else class="container mx-auto px-4 py-8">
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
      ></div>
      <p class="mt-4 text-gray-600">Ürün yükleniyor...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "../../stores/ProductsStore";
import { storeToRefs } from "pinia";
import { ref, computed, onMounted } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

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

interface Size {
  id: number;
  name: string;
}

// Get route params
const route = useRoute();
const productId = parseInt(route.params.id as string);

// Store
const productsStore = useProductsStore();
const { products, categories } = storeToRefs(productsStore);

// Reactive state
const selectedVariant = ref<ProductVariant | null>(null);
const selectedSize = ref<Size | null>(null);
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

// Computed properties
const product = computed((): Product | null => {
  return products.value.find((p: Product) => p.id === productId) || null;
});

const lightboxImages = computed(() => {
  if (!selectedVariant.value?.Images) return [];
  return selectedVariant.value.Images.map((img) => img.url);
});

// Methods
const getCategoryName = (categoryId: number): string => {
  const category = categories.value.find((c: any) => c.id === categoryId);
  return category?.name || "Kategori";
};

const selectVariant = (variant: ProductVariant) => {
  selectedVariant.value = variant;
  selectedSize.value = null; // Reset size selection when variant changes
};

const selectSize = (size: Size) => {
  selectedSize.value = size;
};

const selectImage = (index: number) => {
  if (
    selectedVariant.value?.Images &&
    selectedVariant.value.Images.length > index
  ) {
    // Move selected image to first position
    const images = [...selectedVariant.value.Images];
    const selectedImage = images.splice(index, 1)[0];
    if (selectedImage) {
      images.unshift(selectedImage);
      selectedVariant.value.Images = images;
    }
  }
};

const openLightbox = (index: number) => {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
};

const orderNow = () => {
  if (!selectedVariant.value) {
    alert("Lütfen bir varyant seçin");
    return;
  }

  if (!selectedSize.value && selectedVariant.value.sizes?.length > 0) {
    alert("Lütfen bir beden seçin");
    return;
  }

  const productName = product.value?.name || "Ürün";
  const variantName = selectedVariant.value.name;
  const size = selectedSize.value?.name || "Beden Seçilmedi";
  const price = selectedVariant.value.price;
  const productUrl = window.location.href;

  const message = `Merhaba! ${productName} - ${variantName} ürününü satın almak istiyorum.

Ürün Detayları:
- Ürün: ${productName}
- Varyant: ${variantName}
- Beden: ${size}
- Fiyat: ${price}
- Ürün Linki: ${productUrl}

Bu ürün hakkında daha fazla bilgi alabilir miyim?`;

  const whatsappUrl = `https://wa.me/905517069491?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};

// Initialize
onMounted(() => {
  if (product.value && product.value.variants.length > 0) {
    selectedVariant.value = product.value.variants[0] || null;
  }
});

// Set page title
useHead({
  title: product.value?.name || "Ürün Detayı",
});
</script>

<style scoped>
/* Custom styles for the product page */
</style>
