<script lang="ts" setup>
defineProps<{ fluid?: boolean }>();
</script>

<template>
  <div :class="['Container', { fluid }]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.Container {
  @include flex-column;
  // border: 2px solid $neutral-800;
  max-width: $breakpoint-lg;
  padding: 0 48px;

  &.fluid {
    max-width: 100%;
  }
}
</style>
