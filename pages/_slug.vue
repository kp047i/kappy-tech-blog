<template>
  <div class="flex flex-wrap relative">
    <div class="py-10 w-full lg:w-4/5">
      <article class="content-article px-8 py-8 flex flex-col">
        <h1 class="content-article__title tracking-wider">
          {{ article.title }}
        </h1>
        <span class="mt-4">{{ article.date.slice(0, 10) }}</span>
        <AppArticleTags :tags="article.tags" />
        <p class="mt-6 leading-7 tracking-widest">{{ article.description }}</p>
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

export type MetaType = {
  hid: string
  property: string
  content: string
}

export type HeadType = {
  title: string
  meta: MetaType[]
}

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
  head(): HeadType {
    return {
      title: (this as any).article.title,
      meta: [
        {
          hid: 'slug_description',
          property: 'slug_description',
          content: (this as any).article.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}${this.$route.path}`,
        },
        { hid: 'og:title', property: 'og:title', content: 'kappy tech blog' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: (this as any).article.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/ogp${this.$route.path}.png`,
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
