<template>
  <div class="cursor-pointer">
    <ShareNetwork network="twitter" :url="url" :title="title">
      <div
        class="flex items-center bg-twitter text-white text-xs rounded-sm px-2 py-1"
      >
        <fa :icon="faTwitter" />
        <span class="ml-1">ツイート</span>
      </div>
    </ShareNetwork>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default Vue.extend({
  props: {
    url: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    faTwitter: () => faTwitter,
  },
})
</script>
