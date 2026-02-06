<script lang="ts" setup>
import About from '@/components/sections/About.vue';
import BeyondTech from '@/components/sections/BeyondTech.vue';
import LetsConnect from '@/components/sections/LetsConnect.vue';
import Projects from '@/components/sections/Projects.vue';
import Testimonials from '@/components/sections/Testimonials.vue';

import Nav from '@/components/Nav.vue';
import Container from '@/components/common/Container.vue';
import GetKnowMe from '@/components/sections/GetKnowMe.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <div class="Home">
    <Nav :gsap />

    <GetKnowMe :gsap id="home" />

    <About :gsap id="about" />

    <Projects :gsap id="projects" />

    <BeyondTech :gsap />

    <Testimonials :gsap id="testimonials" />

    <LetsConnect :gsap id="contact" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.Home {
  @include flex-column;
  align-items: center;
  padding: 48px 0;
  gap: 256px;
}
</style>
