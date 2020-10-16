<template>
  <div class="flex flex-wrap relative">
    <div class="py-10 w-full lg:w-4/5">
      <article class="content-article px-8 py-8 flex flex-col">
        <h1 class="content-article__title">{{ article.title }}</h1>
        <span class="mt-4">{{ convertDate }}</span>
        <AppArticleTags :tags="article.tags" />
        <p class="mt-6 leading-7">{{ article.description }}</p>
        <nuxt-content :document="article" />
      </article>
    </div>
    <div class="px-4 py-10 w-full lg:w-1/5">
      <AppToc :article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import AppToc from '@/components/AppToc.vue'
import AppArticleTags from '@/components/AppArticleTags.vue'

export default Vue.extend({
  components: {
    AppToc,
    AppArticleTags,
  },
  async asyncData({ $content, params }: Context): Promise<Object> {
    const article = await $content(params.slug).fetch()
    return {
      article,
    }
  },
  computed: {
    convertDate(): string {
      return (this as any).article.createdAt.substr(0, 10)
    },
  },
  head() {
    return {
      title: (this as any).article.title,
      meta: [
        {
          hid: 'slug_description',
          name: 'slug_description',
          content: (this as any).article.description,
        },
      ],
    }
  },
})
</script>

<style>
.content-article {
  background-color: #fafafa;
}

h1.content-article__title {
  font-size: 40px;
  word-break: break-all;
}
</style>
