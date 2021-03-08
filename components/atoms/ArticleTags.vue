<template>
  <div class="flex items-center mt-4 md:mt-6">
    <fa :icon="faTags" class="text-copper" aria-label="記事のタグ" />
    <span
      v-for="tag in tags"
      :key="tag"
      class="px-2 py-1 ml-2 rounded bg-grayF3"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { faTags } from '@fortawesome/free-solid-svg-icons'
export default Vue.extend({
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    faTags: () => faTags,
  },
})
</script>
