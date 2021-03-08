<template>
  <NuxtLink :to="`#${id}`" class="break-all scrollactive-item">{{
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
