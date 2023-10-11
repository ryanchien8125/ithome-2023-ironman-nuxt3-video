<template>
  <div class="flex w-full justify-center px-6 lg:px-0">
    <div class="mb-8 flex w-full max-w-3xl justify-center">
      <form class="w-full space-y-8 divide-y divide-gray-200" @submit.prevent="handleSubmit">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div class="mt-6">
              <h3 class="text-xl font-medium leading-6 text-gray-900">更新文章</h3>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div class="col-span-12">
                <label for="title" class="block text-sm font-medium text-gray-700">
                  文章標題
                </label>
                <div class="mt-1">
                  <input
                    id="title"
                    v-model="articleData.title"
                    placeholder="請撰輸入文章標題"
                    name="title"
                    type="text"
                    autocomplete="title"
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>
              <div class="col-span-12">
                <label for="cover" class="block text-sm font-medium text-gray-700">
                  代表性圖片連結
                </label>
                <div class="mt-1">
                  <input
                    id="cover"
                    v-model="articleData.cover"
                    placeholder="請撰輸入網址連結"
                    name="cover"
                    type="text"
                    autocomplete="cover"
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-12">
                <label for="about" class="block text-sm font-medium text-gray-700">文章內容</label>
                <div class="mt-1">
                  <textarea
                    id="content"
                    v-model="articleData.content"
                    name="content"
                    rows="4"
                    placeholder="請撰寫文章內容..."
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <NuxtLink
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              to="/"
            >
              取消
            </NuxtLink>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              更新
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: articleData } = await useFetch(`/api/articles/${route.query.id}`)

const handleSubmit = async () => {
  await $fetch(`/api/articles/${route.query.id}`, {
    method: 'PATCH',
    body: {
      title: articleData.value.title,
      content: articleData.value.content,
      cover: articleData.value.cover
    }
  })
    .then((response) => {
      navigateTo({
        name: 'articles-id',
        params: {
          id: response.id
        }
      })
    })
    .catch((error) => alert(error))
}

definePageMeta({
  middleware: 'auth'
})
</script>
