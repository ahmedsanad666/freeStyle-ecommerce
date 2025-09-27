<template>
  <div class="default-layout">
    <nav class="bg-basic w-full top-0 start-0 border-b ">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="@/assets/images/logo/logo.png"
            class="h-12"
            alt="freesytle logo"
          />
          <!-- <img src="/images/logo/logo.png" class="h-8" alt="freesytle logo" /> -->
        </NuxtLink>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="http://wa.me/+905517069491"
            class="px-8 py-2 bg-red-50 rounded-md flex items-center gap-2"
            >Contact <whatsapp class="w-10 h-10" /></a
          >
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium  text-black rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  "
          >
            <li>
              <nuxt-link
                to="/"
                class="block py-2     rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                >Anasayfa</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/products"
                class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:h md:dark:hover:bg-transparent dark:border-gray-700"
                >Ürünler</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/contact"
                class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:h md:dark:hover:bg-transparent dark:border-gray-700"
                >İletişim</nuxt-link
              >
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <slot />
    <FooterSec />
  </div>
</template>

<script lang="ts" setup>
import whatsapp from "@/assets/svgs/whatsapp.svg";
</script>

<style></style>
