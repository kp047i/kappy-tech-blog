<template>
  <p class="mt-6 leading-7 tracking-widest">
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
