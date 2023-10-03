<template>
  <div class="my-24 flex flex-col items-center">
    <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
    <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public

console.log('runtimeConfig:', toRaw(runtimeConfig))
console.log(
  `嘗試在 ${process.client ? 'Client' : 'Server'} 取得 [apiSecret]: ${runtimeConfig.apiSecret}`
)

const { data } = await useFetch(`${apiBase}/hello`)
</script>
