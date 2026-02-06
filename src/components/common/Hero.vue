<script lang="ts" setup>
import ScrollDown from '@/components/ScrollDown.vue';
import Container from './Container.vue';

defineProps<{ gsap: GSAP; scrollDown?: boolean }>();
</script>

<template>
  <Container fluid>
    <div class="Hero">
      <span class="Head"><slot /></span>

      <ScrollDown v-if="scrollDown" />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.Hero {
  @include flex-column;
  align-items: center;
  background: $neutral-800;
  gap: 48px;
  justify-content: center;
  min-height: 240px;
  padding: 48px;

  & > span.Head {
    @include head-48;
    max-width: 560px;
    text-align: center;
  }
}
</style>
