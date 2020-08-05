<template>
  <div class="flex flex-wrap relative">
    <div class="py-10 w-full lg:w-4/5">
      <article class="content-article px-8 py-8">
        <h1 class="content-article__title">{{ article.title }}</h1>
        <span>{{ convertDate }}</span>
        <nuxt-content class="pt-8" :document="article" />
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

export default Vue.extend({
  components: {
    AppToc,
  },
  async asyncData({ $content, params }: Context): Promise<object> {
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
})
</script>

<style>
.content-article {
  background-color: #fafafa;
}

h1.content-article__title {
  font-size: 40px;
}

.nuxt-content h2 {
  font-size: 1.6rem;
  font-weight: 500;
  padding: 16px 0;
}

.nuxt-content h3 {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 16px 0;
}

.nuxt-content p {
  padding-bottom: 16px;
}

.nuxt-content a {
  color: #368ccb;
}
</style>
