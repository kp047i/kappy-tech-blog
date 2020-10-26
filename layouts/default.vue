<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/global/TheHeader.vue'
import TheFooter from '@/components/global/TheFooter.vue'

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter,
  },
})
</script>
