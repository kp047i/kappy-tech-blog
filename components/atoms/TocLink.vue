<template>
  <NuxtLink :to="`#${id}`" class="scrollactive-item hover:text-copper">{{
    text
  }}</NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
})
</script>
