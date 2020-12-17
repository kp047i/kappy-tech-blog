<template>
  <div class="content my-10 w-full lg:w-3/4 shadow">
    <article class="max-w-screen-md px-8 py-8 flex flex-col">
      <ArticleHeader :article="article" />
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IArticle } from '@/types/article'

import ArticleHeader from '@/components/molecules/ArticleHeader.vue'

interface PropsType {
  article: IArticle
}

export default Vue.extend({
  components: {
    ArticleHeader,
  },
  props: {
    article: {
      type: Object,
      default: null,
    } as PropOptions<PropsType>,
  },
})
</script>
