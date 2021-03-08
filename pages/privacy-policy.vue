<template>
  <main class="container flex-grow px-8 pt-16 mx-auto">
    <div class="relative flex flex-wrap">
      <div class="w-full my-10 shadow content">
        <article class="flex flex-col px-8 py-8 content-article">
          <h1 class="tracking-wider content-article__title">
            {{ article.title }}
          </h1>
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData({ $content }: Context): Promise<Object> {
    const article = await $content('privacy-policy').fetch()
    return {
      article,
    }
  },
})
</script>
