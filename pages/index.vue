<template>
  <main
    class="flex-grow container mx-auto max-w-screen-xl px-2 sm:px-4 md:px-4 pt-16"
  >
    <div
      class="flex flex-wrap justify-center md:justify-start py-4 md:py-8 lg:px-8"
    >
      <div
        v-for="article in articles"
        :key="article.title"
        class="md:w-1/2 xl:w-1/3 p-2 md:p-4 lg:px-10 xl:px-4 mb-2"
      >
        <nuxt-link :to="`${article.slug}/`">
          <ArticleCard :article="article" />
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'

export default Vue.extend({
  components: {
    ArticleCard,
  },
  async asyncData({ $content }) {
    const articles = await $content()
      .where({ slug: { $ne: 'privacy-policy' } })
      .sortBy('position', 'desc')
      .fetch()
    return {
      articles,
    }
  },
})
</script>
