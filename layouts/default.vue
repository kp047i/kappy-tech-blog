<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/templates/TheHeader.vue'
import TheFooter from '@/components/templates/TheFooter.vue'

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter,
  },
})
</script>
