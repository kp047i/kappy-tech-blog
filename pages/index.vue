<template>
  <main class="flex-grow px-8 container mx-auto pt-16">
    <div class="py-8 flex flex-wrap">
      <div
        v-for="article in articles"
        :key="article.title"
        class="p-4 md:w-1/2 lg:w-1/3"
      >
        <nuxt-link :to="article.slug">
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
