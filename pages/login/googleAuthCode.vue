<template>
  <div class="flex flex-col items-center justify-center px-4 py-6">
    <div class="flex w-full max-w-md flex-col items-center justify-center">
      <h1 class="my-8 flex text-center text-3xl font-bold tracking-tight text-emerald-500">
        Auth Code
      </h1>

      <button
        class="flex rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        @click="handleGoogleLogin"
      >
        <span class="text-slate-500 group-hover:text-slate-600">使用 Google 進行登入</span>
      </button>

      <div class="mt-4 text-gray-700">
        {{ userInfo }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { googleAuthCodeLogin } from 'vue3-google-login'

const runtimeConfig = useRuntimeConfig()
const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public

const userInfo = ref(null)

const handleGoogleLogin = async () => {
  const authCode = await googleAuthCodeLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => response?.code)

  if (!authCode) {
    // 登入失敗
    return
  }

  const { data } = await useFetch('/api/auth/google-auth-code', {
    method: 'POST',
    body: {
      authCode
    }
  })

  userInfo.value = data.value
}
</script>
