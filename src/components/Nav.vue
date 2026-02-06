<script lang="ts" setup>
import CoolLink from './cool/CoolLink.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <nav class="Nav">
    <CoolLink href="/#home" text="home" />
    <CoolLink href="/#about" text="about me" />
    <CoolLink href="/#projects" text="projects" />
    <CoolLink href="/#testimonials" text="testimonials" />
    <CoolLink href="/#contact" text="contact" />
  </nav>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

nav.Nav {
  @include flex;
  gap: 24px;
  left: 50%;
  position: fixed;
  top: 16px;
  translate: -50% 0;
  width: fit-content;
  z-index: 999;
}
</style>
