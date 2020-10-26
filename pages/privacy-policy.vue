<template>
  <main class="flex-grow px-8 container mx-auto pt-16">
    <div class="flex flex-wrap relative">
      <div class="content my-10 w-full shadow">
        <article class="content-article px-8 py-8 flex flex-col">
          <h1 class="content-article__title tracking-wider">
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
