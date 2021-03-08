<template>
  <button class="px-2 py-2 rounded-full social-icon md:mr-4">
    <slot />
  </button>
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
