<template>
  <div class="content w-full shadow rounded-lg lg:w-3/5 mt-4">
    <article class="flex flex-col p-4 md:p-8">
      <ArticleHeader
        :article="article"
        class="tracking-wider leading-relaxed"
      />
      <nuxt-content
        :document="article"
        class="tracking-wider leading-relaxed"
      />
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
