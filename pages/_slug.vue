<template>
  <main
    class="flex-grow container mx-auto max-w-screen-xl lg:static px-4 md:px-12 pt-16"
  >
    <div class="flex flex-wrap py-4 md:py-8">
      <AppArticle :article="article" />
      <div class="w-full lg:w-2/5 lg:px-10">
        <AppArticleToc :article="article" />
      </div>
      <!-- <div class="px-6 py-10 w-full lg:w-1/4">
        <AppArticleToc :article="article" />
      </div> -->
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { Context } from '@nuxt/types'

import AppArticle from '@/components/organisms/AppArticle.vue'
import AppArticleToc from '@/components/organisms/AppArticleToc.vue'

type DataType = {
  baseHost?: string
}

// type MetaType = {
//   hid: string
//   property: string
//   content: string
// }

// type HeadType = {
//   title: string
//   meta: MetaType[]
// }

interface AsyncDataType {
  article: IContentDocument | IContentDocument[]
}

export default Vue.extend({
  components: {
    AppArticle,
    AppArticleToc,
  },
  async asyncData({ $content, params }: Context): Promise<AsyncDataType> {
    const article = await $content(params.slug).fetch()
    return {
      article,
    }
  },
  data(): DataType {
    return {
      baseHost: process.env.BASE_HOST,
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
          content: `${process.env.BASE_HOST}${this.$route.path}`,
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
          content: `${process.env.BASE_HOST}/img/ogp${this.$route.path}.png`,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `${process.env.BASE_HOST}${this.$route.path}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${process.env.BASE_HOST}/img/ogp${this.$route.path}.png`,
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
