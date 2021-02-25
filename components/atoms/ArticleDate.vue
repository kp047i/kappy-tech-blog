<template>
  <div class="flex items-center">
    <fa :icon="faHistory" class="text-copper" aria-label="記事の更新日" />
    <span class="ml-2">{{ updatedDate }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  props: {
    updatedAt: {
      type: String,
      default: '',
    },
  },
  computed: {
    faHistory: () => faHistory,
    updatedDate() {
      return this.updatedAt.slice(0, 10).replace(/-/g, '/')
    },
  },
})
</script>
