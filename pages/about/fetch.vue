<template>
  <div class="my-24 flex flex-col items-center">
    <span class="text-xl text-gray-400">[$fetch]</span>
    <span class="my-2 text-2xl text-gray-600">回傳資料:</span>
    <p class="my-4 text-xl font-semibold text-blue-500">{{ data }}</p>
  </div>
</template>

<script setup>
const data = await $fetch('/api/about')
</script>
