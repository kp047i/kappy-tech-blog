<template>
  <header class="fixed top-0 z-50 flex items-center w-full h-16 bg-navy">
    <div
      class="relative flex items-center justify-between w-full px-4 md:px-6 lg:px-12 xl:px-16"
    >
      <nuxt-link to="/">
        <div class="text-lg md:text-2xl text-latte">kappy tech blog</div>
      </nuxt-link>
      <div class="flex items-center justify-start">
        <SocialIcon aria-label="筆者のtwitterへのリンク">
          <a href="https://twitter.com/kp047i/" class="fa-lg text-latte">
            <fa :icon="faTwitter" />
          </a>
        </SocialIcon>
        <SocialIcon aria-label="筆者のgithubへのリンク">
          <a
            href="https://github.com/kp047i/kappy-tech-blog/"
            class="fa-lg text-latte"
          >
            <fa :icon="faGithub" />
          </a>
        </SocialIcon>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import SocialIcon from '@/components/atoms/SocialIcon.vue'

export default Vue.extend({
  components: {
    SocialIcon,
  },
  computed: {
    faTwitter: () => faTwitter,
    faGithub: () => faGithub,
  },
})
</script>
