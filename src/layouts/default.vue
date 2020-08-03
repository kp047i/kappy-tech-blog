<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/global/TheHeader.vue'

export default Vue.extend({
  components: {
    TheHeader,
  },
})
</script>
