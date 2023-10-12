<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Nuxt 3 Blog',
  titleTemplate: (title) => (title ? `${title} - Nuxt 3 Blog` : 'Nuxt 3 Blog'),
  htmlAttrs: {
    lang: 'zh-TW'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  description: '歡迎來到使用 Nuxt 3 開發的部落格網站',
  ogTitle: 'Nuxt 3 Blog',
  ogDescription: '歡迎來到使用 Nuxt 3 開發的部落格網站',
  ogUrl: 'http://localhost:3000/',
  ogImage: 'https://i.imgur.com/AVNujNC.png'
})
</script>
