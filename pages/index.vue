<template>
  <div class="py-8">
    <div v-for="article in articles" :key="article.title">
      <nuxt-link :to="article.slug">
        {{ article.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content().sortBy('createdAt', 'desc').fetch()
    return {
      articles,
    }
  },
})
</script>
