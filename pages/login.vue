<template>
  <div class="flex flex-col items-center justify-center px-4 py-6">
    <div class="flex w-full max-w-md flex-col justify-center">
      <div class="flex flex-col items-center">
        <h2 class="my-4 text-center text-3xl font-bold tracking-tight text-gray-700">Login</h2>
      </div>
      <div class="mt-2 flex w-full max-w-md flex-col items-center">
        <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="sendLoginRequest"
        >
          發送 API 請求至 /api/login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const sendLoginRequest = () => {
  useFetch('/api/login', {
    method: 'POST',
    body: {
      name: 'Ryan'
    }
  })
}
</script>
