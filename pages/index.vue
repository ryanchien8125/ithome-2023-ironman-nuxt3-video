<template>
  <div class="flex flex-col items-center justify-center px-4 py-6">
    <div class="flex w-full max-w-md flex-col justify-center">
      <div class="flex flex-col items-center">
        <h2 class="my-4 text-center text-3xl font-bold tracking-tight text-gray-700">Cookie</h2>
      </div>
      <div class="mx-auto flex w-full max-w-xs flex-row justify-around gap-2">
        <div class="flex flex-col items-center gap-2">
          <button
            type="button"
            class="w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            @click="setNameCookie"
          >
            設置 name
          </button>
          <div class="flex">
            <label class="text-lg font-semibold text-emerald-500">name:</label>
            <span class="ml-2 flex text-lg text-slate-700">{{ name }}</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <button
            type="button"
            class="w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            @click="setCounterCookie"
          >
            設置 counter
          </button>
          <div class="flex">
            <label class="text-lg font-semibold text-emerald-500">counter:</label>
            <span class="ml-2 flex text-lg text-slate-700">{{ counter }}</span>
          </div>
        </div>
      </div>

      <div class="mt-2 flex w-full max-w-md flex-col items-center">
        <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="sendRequest"
        >
          發送 API 請求至 /api/counter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = useCookie('name')
const counter = useCookie('counter', { maxAge: 10 })

const setNameCookie = () => {
  name.value = 'Ryan'
}

const setCounterCookie = () => {
  counter.value = Math.round(Math.random() * 1000)
}

const sendRequest = () => {
  useFetch('/api/counter', {
    headers: useRequestHeaders(['cookie'])
  })
}
</script>
