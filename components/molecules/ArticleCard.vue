<template>
  <div class="h-full overflow-hidden bg-white rounded-lg shadow-lg">
    <ArticleThumbnail :slug="article.slug" :title="article.title" />
    <div class="p-6">
      <ArticleDate :updated-at="article.updatedAt" />
      <h2 class="my-3 text-xl font-medium title-font text-navy">
        {{ article.title }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

import ArticleThumbnail from '@/components/atoms/ArticleThumbnail.vue'
import ArticleDate from '@/components/atoms/ArticleDate.vue'

interface IToc {
  depth: number
  id: string
  text: string
}

interface IArticle extends IContentDocument {
  body: Object
  date: string
  description: string
  position: number
  tags: string[]
  title: string
  toc: IToc[]
}

export default Vue.extend({
  components: {
    ArticleThumbnail,
    ArticleDate,
  },
  props: {
    article: {
      type: Object,
      default: null,
    } as PropOptions<IArticle>,
  },
})
</script>
