<template>
  <div class="mt-4 md:mt-6">
    <picture>
      <source :srcset="`/img/ogp/${slug}.webp`" type="image/webp" />
      <img :src="`/img/ogp/${slug}.png`" :alt="`${title}のサムネイル`" />
    </picture>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
})
</script>
