<template>
  <header class="flex w-full justify-center">
    <nav class="flex w-full max-w-7xl items-center justify-between px-6 py-2">
      <div>
        <a href="/">
          <div class="flex items-center justify-between">
            <div class="mr-3">
              <Icon class="h-12 w-12" name="logos:nuxt-icon" />
            </div>
            <div class="hidden h-6 text-2xl font-semibold text-gray-700 sm:block">Nuxt 3 Blog</div>
          </div>
        </a>
      </div>

      <div v-if="userInfo" class="group relative">
        <label for="avatar" class="cursor-pointer">
          <img
            class="inline-block h-10 w-10 rounded-full bg-white/90 object-cover object-center p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            :src="userInfo.avatar"
            alt="使用者選單"
          />
        </label>
        <div class="absolute right-0 hidden w-60 pt-1 text-gray-700 group-hover:block">
          <div
            class="mt-1 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="flex items-center px-4 py-3">
              <img
                :src="userInfo.avatar"
                class="inline-block h-9 w-9 rounded-full bg-white/90 object-cover object-center p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
              />
              <div class="ml-3.5 flex-grow overflow-hidden">
                <p class="overflow-hidden text-ellipsis font-medium">{{ userInfo.nickname }}</p>
                <p class="overflow-hidden text-ellipsis text-xs text-gray-500">
                  {{ userInfo.email }}
                </p>
              </div>
            </div>
            <div class="group/menu-item px-1 py-1">
              <NuxtLink
                class="flex w-full items-center rounded-md px-2 py-2 text-sm group-hover/menu-item:bg-emerald-500 group-hover/menu-item:text-white"
                to="/articles/create"
              >
                <Icon
                  class="mr-2 h-5 w-5 text-emerald-400 group-hover/menu-item:text-white"
                  name="ri:pencil-line"
                />
                撰寫文章
              </NuxtLink>
            </div>
            <div class="group/menu-item px-1 py-1">
              <button
                class="flex w-full items-center rounded-md px-2 py-2 text-sm group-hover/menu-item:bg-emerald-500 group-hover/menu-item:text-white"
                @click="handleLogout"
              >
                <Icon
                  class="mr-2 h-5 w-5 text-emerald-400 group-hover/menu-item:text-white"
                  name="ri:logout-box-line"
                />
                登出
              </button>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink
        v-else
        class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
        to="/login"
      >
        登入
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const { data: userInfo } = await useFetch('/api/whoami')

const handleLogout = () => {
  $fetch('/api/session', {
    method: 'DELETE'
  }).then(() => {
    userInfo.value = null
  })
}
</script>
