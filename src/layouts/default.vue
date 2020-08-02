<template>
  <div class="wrapper">
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export default Vue.extend({
  components: {
    TheHeader,
  },
})
</script>
