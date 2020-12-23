<template>
  <div class="social-icon px-2 py-2 md:mr-4 rounded-full">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.social-icon:hover {
  background-color: rgba(254, 246, 227, 0.1);
}
</style>
