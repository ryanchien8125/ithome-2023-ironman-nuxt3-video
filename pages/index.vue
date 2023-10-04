<template>
  <div class="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex w-full max-w-md flex-col items-center justify-center">
      <h1 class="my-8 flex text-center text-3xl font-bold tracking-tight text-emerald-500">
        Nuxt App
      </h1>
      <ClientOnly>
        <GoogleLogin :callback="callback" popup-type="TOKEN">
          <button
            class="flex rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span class="text-slate-500 group-hover:text-slate-600">使用 Google 進行登入</span>
          </button>
        </GoogleLogin>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const callback = (response) => {
  console.log(response)
}
</script>
