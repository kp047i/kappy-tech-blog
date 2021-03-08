<template>
  <div class="ml-4 cursor-pointer">
    <ShareNetwork
      network="twitter"
      :url="articleLink.url"
      :title="articleLink.title"
    >
      <div
        class="flex items-center px-2 py-1 text-xs text-white rounded-sm bg-twitter"
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
