<template>
  <div class="flex w-full flex-col items-center">
    <div class="item-center mt-8 flex w-full max-w-4xl flex-col px-6 md:items-start lg:px-0">
      <h1 class="text-3xl font-semibold text-gray-800">最新文章</h1>
    </div>
    <div class="my-8 flex w-full max-w-4xl flex-col">
      <div v-if="pending">
        <Icon class="h-6 w-6 text-gray-500" name="eos-icons:loading" />
      </div>
      <template v-else>
        <div v-if="error">
          <span class="text-gray-500">發生了一點錯誤，請稍後再嘗試</span>
          <p class="my-2 text-rose-500">{{ error }}</p>
        </div>
        <div v-else-if="!articlesResponse || articlesResponse.items.length === 0">
          <span class="text-gray-500">目前尚無最新文章</span>
        </div>
        <div v-else class="md:border-l md:border-gray-100">
          <div class="flex flex-col space-y-4 md:pl-6">
            <article
              v-for="article in articlesResponse.items"
              :key="article.id"
              class="md:grid md:grid-cols-4 md:items-baseline"
            >
              <NuxtLink
                class="group mx-4 flex cursor-pointer flex-col items-start px-4 py-6 transition hover:bg-gray-50 sm:rounded-2xl md:col-span-3 md:mx-0"
                :to="{
                  name: 'articles-id',
                  params: {
                    id: article.id
                  }
                }"
              >
                <h2 class="text-base font-semibold tracking-tight text-gray-700">
                  <span class="">{{ article.title }}</span>
                </h2>
                <time class="order-first mb-3 flex items-center text-sm text-gray-400 md:hidden">
                  {{ date2LocaleString(article.updated_at) }}
                </time>
                <p class="mt-2 text-sm text-gray-500">
                  {{ article.content.replace(/\n/g, ' ').substring(0, 300) }}
                </p>
                <span
                  aria-hidden="true"
                  class="mt-4 flex items-center text-sm font-medium text-emerald-500"
                >
                  繼續閱讀
                  <Icon name="ri:arrow-right-s-line" />
                </span>
              </NuxtLink>
              <time class="order-first mb-3 mt-1 hidden items-center text-sm text-gray-400 md:flex">
                {{ date2LocaleString(article.updated_at) }}
              </time>
            </article>
          </div>
        </div>
      </template>

      <nav
        v-if="articlesResponse"
        class="mt-12 flex items-center justify-between px-4 py-3 sm:px-6"
      >
        <div class="flex flex-1 justify-center sm:justify-end">
          <NuxtLink
            v-if="currentPage > 1"
            class="flex items-center text-xl font-medium text-gray-600 hover:text-emerald-500"
            :to="{
              name: 'index',
              query: {
                page: currentPage - 1
              }
            }"
          >
            <Icon name="ri:arrow-left-s-line" />
          </NuxtLink>
          <label class="mx-2 text-sm text-gray-600">第 {{ articlesResponse.page }} 頁</label>
          <NuxtLink
            class="flex items-center text-xl font-medium text-gray-600 hover:text-emerald-500"
            :to="{
              name: 'index',
              query: {
                page: currentPage + 1
              }
            }"
          >
            <Icon name="ri:arrow-right-s-line" />
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const currentPage = computed(() => parseInt(route?.query?.page) || 1)
const {
  pending,
  data: articlesResponse,
  error
} = await useFetch('/api/articles', {
  query: {
    page: currentPage,
    pageSize: 10
  }
})

const date2LocaleString = (date) => {
  return new Date(date).toLocaleString()
}
</script>
