<template>
  <div class="flex flex-col items-center overflow-y-visible px-6 py-4">
    <a v-scroll-to="'#element'" href="#" class="my-4 font-medium text-gray-600">
      捲動頁面至 #element
    </a>

    <button
      v-focus
      class="my-4 w-fit rounded-full bg-blue-500 px-8 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      @click="scrollToElement"
    >
      捲動頁面至 #element
    </button>

    <div id="element" class="mt-24">
      <h1 class="p-2 text-6xl font-semibold text-sky-400">這裡是 #element</h1>
    </div>

    <div class="h-screen w-full"></div>
  </div>
</template>

<script setup>
const scrollToElement = () => {
  useNuxtApp().$scrollTo('#element')
}
</script>
