<template>
  <header class="fixed top-0 bg-navy w-full z-50 h-16 flex items-center">
    <div
      class="relative flex justify-between w-full items-center px-4 md:px-6 lg:px-12 xl:px-16"
    >
      <nuxt-link to="/">
        <div class="text-lg md:text-2xl text-latte">kappy tech blog</div>
      </nuxt-link>
      <div class="flex items-center justify-start">
        <a href="https://twitter.com/kp047i" class="md:mr-4 fa-lg text-latte">
          <AppSocialButton>
            <fa :icon="faTwitter" />
          </AppSocialButton>
        </a>
        <a
          href="https://github.com/kp047i/kappy-tech-blog"
          class="fa-lg text-latte"
        >
          <AppSocialButton>
            <fa :icon="faGithub" />
          </AppSocialButton>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import AppSocialButton from '@/components/atoms/AppSocialButton.vue'

export default Vue.extend({
  components: {
    AppSocialButton,
  },
  computed: {
    faTwitter: () => faTwitter,
    faGithub: () => faGithub,
  },
})
</script>
