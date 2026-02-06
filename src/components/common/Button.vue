<script lang="ts" setup>
import { Icon } from '@iconify/vue';

withDefaults(defineProps<{ to?: string }>(), { to: '/#home' });
</script>

<template>
  <a :href="to" class="Button">
    <span class="Text">
      <slot />
    </span>

    <Icon class="Icon" icon="ph:arrow-right-bold" />
  </a>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.Button {
  @include flex;
  align-items: center;
  background: rgba($neutral-500, 0.25);
  border: 2px solid $primary-700;
  color: $neutral-300;
  cursor: pointer;
  gap: 16px;
  min-height: 48px;
  padding: 0 16px;
  transition-duration: 128ms;
  transition-property: background, border-color, color, scale;
  user-select: none;
  width: fit-content;

  &:active {
    scale: 0.95;
  }

  &:hover,
  &:focus {
    background: rgba($neutral-300, 0.25);
    border-color: $primary-500;
    color: $neutral-white;
  }

  & > span.Text {
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
  }

  & > svg.Icon {
    font-size: 24px;
  }
}
</style>
