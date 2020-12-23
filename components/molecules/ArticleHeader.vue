<template>
  <section>
    <ArticleTitle :title="article.title" />
    <div class="flex items-center mt-4 md:mt-6">
      <ArticleDate :updated-at="article.updatedAt" />
      <ArticleShareButton :article-link="articleLink" />
    </div>
    <ArticleTags :tags="article.tags" />
    <ArticleThumbnail :slug="article.slug" :title="article.title" />
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
import ArticleThumbnail from '@/components/atoms/ArticleThumbnail.vue'
import ArticleDescription from '@/components/atoms/ArticleDescription.vue'

interface DataType {
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
  date: string
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
    ArticleThumbnail,
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
        url: `${process.env.BASE_HOST}${this.$route.path}/`,
      },
    }
  },
})
</script>
