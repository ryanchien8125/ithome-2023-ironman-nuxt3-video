<template>
  <div class="flex w-full justify-center px-6 lg:px-0">
    <div v-if="pending">
      <Icon class="h-6 w-6 text-gray-500" name="eos-icons:loading" />
    </div>
    <template v-else>
      <div v-if="error" class="my-4">
        <span class="text-gray-500">發生了一點錯誤，請稍後再嘗試</span>
        <p class="my-2 text-rose-500">{{ error }}</p>
      </div>
      <div v-else-if="article" class="mb-8 flex w-full flex-col justify-center md:max-w-3xl">
        <div class="mt-4 flex justify-center">
          <img :src="article.cover" />
        </div>
        <time class="my-2 text-sm text-gray-400">
          {{ new Date(article.updated_at).toLocaleString() }}
        </time>
        <h1 class="break-words text-4xl font-semibold text-gray-700">{{ article.title }}</h1>
        <div class="mt-6 break-words">
          {{ article.content }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: article, error } = await useFetch(`/api/articles/${route.params.id}`)
</script>
