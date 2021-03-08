<template>
  <h1 class="text-2xl font-bold break-all">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>
