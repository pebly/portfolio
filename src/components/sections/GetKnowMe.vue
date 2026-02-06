<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import avatarAlexa from '@/assets/home/testimonials-alexa.jpg';
import avatarRares from '@/assets/home/testimonials-rares.jpg';

import CoolLink from '@/components/cool/CoolLink.vue';
import Container from '@/components/common/Container.vue';
import Hero from '../common/Hero.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <Hero :gsap class="GetKnowMe" scrollDown>
    Get to know me beyond
    <span>the ATS-friendly CV</span>
  </Hero>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

section.GetKnowMe {
  @include flex-column;
  align-items: center;
  gap: 64px;

  & > .Head {
    @include head-72;
    max-width: 900px;
    text-align: center;
  }
}
</style>
