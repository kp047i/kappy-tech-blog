<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow px-8 container mx-auto pt-16">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter,
  },
})
</script>
