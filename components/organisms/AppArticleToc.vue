<template>
  <client-only>
    <scrollactive
      active-class="active"
      class="content sticky top-24 shadow rounded-lg p-8"
      :offset="80"
      :scroll-offset="80"
      :always-track="true"
      :high-light-first-item="true"
    >
      <ul>
        <li
          v-for="link in article.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          class="pb-4"
        >
          <TocLink :id="link.id" :text="link.text" />
        </li>
      </ul>
    </scrollactive>
  </client-only>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import TocLink from '@/components/atoms/TocLink.vue'
import { IArticle } from '@/types/article'

export default Vue.extend({
  components: {
    TocLink,
  },
  props: {
    article: {
      type: Object,
      default: null,
    } as PropOptions<IArticle | IArticle[]>,
  },
})
</script>

<style scoped>
.toc3 {
  padding-left: 16px;
}

.active {
  color: #d66853;
}

.top-24 {
  top: 6rem;
}
</style>
