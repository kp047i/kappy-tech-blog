<template>
  <h1 class="font-bold text-2xl break-all">
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
