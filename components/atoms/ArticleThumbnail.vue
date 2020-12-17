<template>
  <div class="py-8">
    <picture>
      <source :srcset="`/img/ogp/${slug}.webp`" type="image/webp" />
      <img :src="`/img/ogp/${slug}.png`" :alt="`${slug} thumbnail`" />
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
  },
})
</script>
