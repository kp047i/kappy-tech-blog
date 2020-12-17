<template>
  <div class="h-full bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      class="lg:h-48 md:h-36 w-full object-cover object-center"
      :src="`/img/ogp/${article.slug}.png`"
      alt="thumbnail"
    />
    <div class="p-6">
      <ArticleDate :updated-at="article.updatedAt" />
      <h2 class="title-font text-xl font-medium text-navy my-3">
        {{ article.title }}
      </h2>
      <p class="leading-7 mb-3 text-gray-700">
        {{ article.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

// import ArticleDescription from '@/components/atoms/ArticleDescription.vue'
import ArticleDate from '@/components/atoms/ArticleDate.vue'

interface IToc {
  depth: number
  id: string
  text: string
}

interface IArticle extends IContentDocument {
  body: Object
  date: Date
  description: string
  position: number
  tags: string[]
  title: string
  toc: IToc[]
}

export default Vue.extend({
  components: {
    // ArticleDescription,
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
