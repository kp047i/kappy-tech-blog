<template>
  <div class="flex flex-wrap relative">
    <div class="py-10 w-full lg:w-4/5">
      <article class="content-article px-8 py-8 flex flex-col">
        <h1 class="content-article__title">{{ article.title }}</h1>
        <span>{{ convertDate }}</span>
        <div class="flex pt-2 items-center">
          <fa :icon="faTags" class="text-copper" />
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="ml-2 px-1 py-1 bg-grayF3"
          >
            {{ tag }}
          </span>
        </div>
        <p class="py-4">{{ article.description }}</p>
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
import { faTags } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  components: {
    AppToc,
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
    faTags: () => faTags,
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

.nuxt-content-highlight {
  padding-bottom: 16px;
}
</style>
