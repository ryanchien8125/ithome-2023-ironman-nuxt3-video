<template>
  <div class="flex flex-col items-center justify-center px-4 py-6">
    <div class="flex w-full max-w-md flex-col items-center justify-center">
      <h1 class="my-8 flex text-center text-3xl font-bold tracking-tight text-emerald-500">
        Credential
      </h1>

      <ClientOnly>
        <GoogleLogin :callback="callback" prompt />
      </ClientOnly>

      <div class="mt-4 text-gray-700">
        {{ userInfo }}
      </div>
    </div>
  </div>
</template>

<script setup>
const userInfo = ref(null)

const callback = async (response) => {
  if (!response?.credential) {
    // 登入失敗
    return
  }

  const { data } = await useFetch('/api/auth/google-credential', {
    method: 'POST',
    body: {
      credential: response.credential
    }
  })

  userInfo.value = data.value
}
</script>
