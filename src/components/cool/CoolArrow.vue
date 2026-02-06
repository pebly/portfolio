<script lang="ts" setup>
import { ref } from 'vue';
import { type CoolProps } from '../composables/useCool';

import CoolSVG from './CoolSVG.vue';
import CoolText from './CoolText.vue';

const el = ref<HTMLElement>();

const props = withDefaults(defineProps<CoolProps>(), { mode: 'auto' });
</script>

<template>
  <div class="CoolArrow" ref="el">
    <CoolSVG :gsap :mode :trigger="el" v-if="el">
      <svg viewBox="0 0 1000 500">
        <path d="M0 0C500 0 500 400 1000 400M800 300 1000 400 900 500" />
      </svg>
    </CoolSVG>

    <CoolText :gsap :mode :trigger="el" v-if="el">
      <slot />
    </CoolText>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.CoolArrow {
  @include flex-column;
  justify-content: center;
  max-width: 256px;

  & > .CoolSVG {
    left: 50%;
    max-width: 200px;
    rotate: -45deg;
    translate: 50% 0;
  }
  & > .CoolText {
    font-family: 'Shadows Into Light', cursive;
    font-size: 24px;
  }
}
</style>
