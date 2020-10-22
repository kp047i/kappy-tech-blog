<template>
  <div class="flex flex-wrap relative">
    <div class="content my-10 w-full">
      <article class="content-article px-8 py-8 flex flex-col">
        <h1 class="content-article__title tracking-wider">
          {{ article.title }}
        </h1>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
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
