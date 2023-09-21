<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-semibold text-red-500">404</h1>
      <p class="my-8 text-3xl text-gray-800">Not Found</p>
      <p class="my-8 text-xl text-gray-800">真的是找不到這個頁面啦 😓</p>
    </div>
  </div>
</template>

<script setup>
setResponseStatus(404)
</script>
