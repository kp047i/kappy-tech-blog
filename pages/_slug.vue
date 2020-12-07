<template>
  <main class="flex-grow px-8 container container-article mx-auto pt-16">
    <div class="flex flex-wrap relative">
      <div class="content my-10 w-full lg:w-3/4 shadow">
        <article class="content-article px-8 py-8 flex flex-col">
          <section>
            <h1 class="content-article__title tracking-wider">
              {{ article.title }}
            </h1>
            <div class="flex items-center mt-4">
              <span class="mr-4">{{ article.date.slice(0, 10) }}</span>
              <ShareButton
                :url="`${baseUrl}${this.$route.path}`"
                :title="article.title"
              />
            </div>
            <AppArticleTags :tags="article.tags" />
            <p class="mt-6 leading-7 tracking-widest">
              {{ article.description }}
            </p>
          </section>
          <nuxt-content :document="article" />
        </article>
      </div>
      <div class="px-6 py-10 w-full lg:w-1/4">
        <AppToc :article="article" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import AppToc from '@/components/AppToc.vue'
import AppArticleTags from '@/components/AppArticleTags.vue'
import ShareButton from '@/components/ShareButton.vue'

// export type MetaType = {
//   hid: string
//   property: string
//   content: string
// }

// export type HeadType = {
//   title: string
//   meta: MetaType[]
// }

export default Vue.extend({
  components: {
    AppToc,
    AppArticleTags,
    ShareButton,
  },
  async asyncData({ $content, params }: Context): Promise<Object> {
    const article = await $content(params.slug).fetch()
    return {
      article,
    }
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    }
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
          content: `${process.env.BASE_URL}img/ogp${this.$route.path}.png`,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `${process.env.BASE_URL?.slice(0, -1)}${this.$route.path}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${process.env.BASE_URL}img/ogp${this.$route.path}.png`,
        },
      ],
    }
  },
})
</script>

<style scoped>
.container-article {
  max-width: 960px;
}
</style>
