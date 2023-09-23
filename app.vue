<template>
  <div class="flex flex-col items-center">
    <JustClient />
    <ClientAndServer />

    <ClientOnly>
      <BaseApplyButton />
      <template #fallback>
        <p class="my-6 flex justify-center">[BaseApplyButton.vue] 元件載入中...</p>
      </template>
    </ClientOnly>

    <div class="mt-8 flex items-center">
      <input id="show-button" v-model="show" type="checkbox" class="h-5 w-5" />
      <label for="show-button" class="ml-2 block text-base text-slate-800">顯示報名按鈕</label>
    </div>
    <LazyBaseApplyRoundButton v-if="show" />
  </div>
</template>

<script setup>
const show = ref(false)
</script>
