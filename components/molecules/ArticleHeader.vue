<template>
  <section>
    <ArticleTitle :title="article.title" />
    <div class="flex items-center mt-4">
      <ArticleDate :date="article.date" />
      <ArticleShareButton :article-link="articleLink" />
    </div>
    <ArticleTags :tags="article.tags" />
    <ArticleDescription :description="article.description" />
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

import ArticleTitle from '@/components/atoms/ArticleTitle.vue'
import ArticleDate from '@/components/atoms/ArticleDate.vue'
import ArticleTags from '@/components/atoms/ArticleTags.vue'
import ArticleShareButton from '@/components/atoms/ArticleShareButton.vue'
import ArticleDescription from '@/components/atoms/ArticleDescription.vue'

type DataType = {
  articleLink: {
    title: string
    url: string
  }
}

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
    ArticleTitle,
    ArticleDate,
    ArticleTags,
    ArticleShareButton,
    ArticleDescription,
  },
  props: {
    article: {
      type: Object,
      default: null,
    } as PropOptions<IArticle>,
  },
  data(): DataType {
    return {
      articleLink: {
        title: this.article.title,
        url: `${process.env.BASE_HOST}${this.$route.path}`,
      },
    }
  },
})
</script>
