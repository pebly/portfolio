<script lang="ts" setup>
import Container from './Container.vue';
import Nav from '../Nav.vue';
import LetsConnect from '@/components/sections/LetsConnect.vue';
import Hero from './Hero.vue';

defineProps<{ gsap: GSAP; hero: string }>();
</script>

<template>
  <div class="SimplePage">
    <Nav :gsap />

    <Hero :gsap>{{ hero }}</Hero>

    <Container class="Flex">
      <slot />
    </Container>

    <LetsConnect :gsap />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.SimplePage {
  @include flex-column;
  align-items: center;
  padding: 48px 0;
  gap: 192px;

  & > .Container.Flex {
    gap: 192px;

    & > :deep(section) {
      @include flex-column;
      align-items: center;
      gap: 72px;

      & > .View {
        @include flex;
        align-items: center;
        justify-content: center;

        &.layout-1,
        &.layout-2 {
          gap: 72px;
        }
        &.layout-1,
        &.layout-3 {
          max-width: 1024px;
        }
        &.layout-2 {
          max-width: 768px;
        }
        &.layout-3 {
          gap: 0;
        }

        & > .CoolPhoto {
          width: fit-content;

          & > img {
            max-height: 768px;
          }
        }

        & > .Flex {
          @include flex-column;
          gap: 16px;

          & > .Text {
            @include text-20;
            width: 100%;
          }

          & > .Button {
            margin-top: 16px;
          }
        }
      }
    }
  }
}
</style>
