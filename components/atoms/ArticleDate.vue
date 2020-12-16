<template>
  <span class="mr-4">{{ date.slice(0, 10) }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    date: {
      type: String,
      default: '',
    },
  },
})
</script>
