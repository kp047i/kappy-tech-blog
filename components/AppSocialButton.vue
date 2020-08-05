<template>
  <button
    type="button"
    class="btn__social px-2 py-2 rounded-full focus:outline-none"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.btn__social:hover {
  background-color: rgba(254, 246, 227, 0.1);
}
</style>
