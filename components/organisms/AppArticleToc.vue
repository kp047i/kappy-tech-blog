<template>
  <client-only>
    <aside>
      <nav>
        <scrollactive active-class="active" class="my-nav fixed" :offset="60">
          <ul>
            <li
              v-for="link in article.toc"
              :key="link.id"
              :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
              class="py-2"
            >
              <TocLink :id="link.id" :text="link.text" />
            </li>
          </ul>
        </scrollactive>
      </nav>
    </aside>
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

<style>
.toc3 {
  padding-left: 16px;
}

.active {
  color: #d66853;
}
</style>
