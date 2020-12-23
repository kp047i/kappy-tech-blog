<template>
  <div>
    <picture>
      <source :srcSet="`/img/ogp/${slug}.png?webp`" type="image/webp" />
      <source :srcSet="`/img/ogp/${slug}.png`" type="image/webp" />
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
