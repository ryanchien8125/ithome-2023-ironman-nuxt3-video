<template>
  <div
    style="background-image: linear-gradient(135deg, #16a34a 35%, #059669 100%)"
    class="flex min-h-screen items-center text-white"
  >
    <div class="mx-auto flex flex-wrap items-center p-4">
      <div class="w-full p-4 text-center lg:w-1/2">
        <div class="text-[12rem] font-semibold">{{ error.statusCode }}</div>
      </div>
      <div class="w-full p-4 text-center lg:w-1/2 lg:text-left">
        <div class="mb-4 text-3xl font-medium">噢不！發生了一些意外 🙁</div>
        <div class="mb-8 text-lg">{{ errorMessage }}</div>
        <button
          type="button"
          class="rounded border border-white px-4 py-2 hover:bg-gray-50 hover:bg-opacity-10 active:bg-opacity-20"
          @click="handleError"
        >
          回首頁
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const errorMessage = computed(() => {
  if (props?.error?.statusCode === 404) {
    return '您可能輸入了錯誤的網址或頁面已被刪除。'
  }
  return props?.error?.message
})

const handleError = () => clearError({ redirect: '/' })
</script>
