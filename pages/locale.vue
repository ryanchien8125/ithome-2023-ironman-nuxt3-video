<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <p class="mt-4 text-xl text-slate-500">Locale</p>
      <span class="text-6xl font-semibold text-emerald-400">{{ locale }}</span>
    </div>
  </div>
</template>

<script setup>
const locale = useLocale()
</script>
