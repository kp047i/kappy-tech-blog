<template>
  <div class="h-full bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      class="lg:h-48 md:h-36 w-full object-cover object-center"
      :src="`/img/ogp/${article.slug}.png`"
      alt="thumbnail"
    />
    <div class="p-6">
      <span>{{ article.date.slice(0, 10) }}</span>
      <h2 class="title-font text-xl font-medium text-navy my-3">
        {{ article.title }}
      </h2>
      <p class="leading-relaxed mb-3 text-gray-700">
        {{ article.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      default: null,
    } as PropOptions<IContentDocument | IContentDocument[]>,
  },
})
</script>
