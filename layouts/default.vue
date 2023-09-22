<template>
  <div class="bg-sky-100 py-6">
    <p class="px-6 py-2 text-2xl text-sky-600">
      這個藍色的背景是預設的布局，預計給全部的頁面做使用
    </p>
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>
