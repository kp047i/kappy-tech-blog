<template>
  <p class="my-8 md:my-10">
    {{ description }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    description: {
      type: String,
      default: '',
    },
  },
})
</script>
