<template>
  <div class="flex flex-row flex-wrap gap-4">
    <img src="/bg.jpg" width="600" />
    <img src="~/assets/cat.jpg" width="600" />
    <img src="@/assets/cat.jpg" width="600" />
    <img :src="catImage" width="600" />
  </div>
</template>

<script setup>
import catImage from 'assets/cat.jpg'
</script>
