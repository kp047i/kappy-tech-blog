<template>
  <div class="w-full mt-4 rounded-lg shadow content lg:w-3/5">
    <article class="flex flex-col p-4 md:p-8">
      <ArticleHeader
        :article="article"
        class="leading-relaxed tracking-wider"
      />
      <nuxt-content
        :document="article"
        class="leading-relaxed tracking-wider"
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
