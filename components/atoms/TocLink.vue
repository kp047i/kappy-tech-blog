<template>
  <NuxtLink :to="`#${id}`" class="scrollactive-item break-all">{{
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
