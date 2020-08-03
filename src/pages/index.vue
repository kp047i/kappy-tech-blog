<template>
  <div class="container mx-auto py-8">
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
    const articles = await $content().fetch()
    return {
      articles,
    }
  },
})
</script>
