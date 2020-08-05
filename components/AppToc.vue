<template>
  <no-ssr>
    <aside>
      <nav>
        <scrollactive active-class="active" class="my-nav fixed">
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
              class="py-2"
            >
              <NuxtLink :to="`#${link.id}`" class="scrollactive-item">{{
                link.text
              }}</NuxtLink>
            </li>
          </ul>
        </scrollactive>
      </nav>
    </aside>
  </no-ssr>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      default: null,
    },
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
