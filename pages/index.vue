<template>
  <main
    class="container flex-grow max-w-screen-xl px-2 pt-16 mx-auto sm:px-4 md:px-4"
  >
    <h1 class="mt-8 text-2xl lg:px-16">記事一覧</h1>
    <div
      class="flex flex-wrap justify-center py-4 md:justify-start md:py-8 lg:px-8"
    >
      <div
        v-for="article in articles"
        :key="article.title"
        class="p-2 mb-2 md:w-1/2 xl:w-1/3 md:p-4 lg:px-10 xl:px-4"
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
