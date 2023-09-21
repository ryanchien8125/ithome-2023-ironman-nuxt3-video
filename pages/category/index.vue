<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl text-gray-600">這是 Category 首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/category/8"> 前往指定的類別 </NuxtLink>
        <NuxtLink to="/category/8/posts/1">前往指定類別的文章</NuxtLink>
        <NuxtLink to="/category/top-3">前往 Top 3</NuxtLink>
        <NuxtLink to="/category/top-10">前往 Top 10</NuxtLink>
      </div>
    </div>
  </div>
</template>
