<template>
  <div class="cursor-pointer ml-4">
    <ShareNetwork
      network="twitter"
      :url="articleLink.url"
      :title="articleLink.title"
    >
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
import Vue, { PropOptions } from 'vue'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

interface IProps {
  articleLink: {
    url: string
    title: string
  }
}

export default Vue.extend({
  props: {
    articleLink: {
      type: Object,
      default: null,
    } as PropOptions<IProps>,
  },
  computed: {
    faTwitter: () => faTwitter,
  },
})
</script>
