<script lang="ts" setup>
import { ref } from 'vue';
import { type CoolProps, useCool } from '../composables/useCool';

const el = ref<HTMLElement>();

const props = withDefaults(
  defineProps<
    CoolProps & { border?: boolean; polaroid?: boolean; rotate?: number }
  >(),
  { rotate: 0, mode: 'auto' },
);

/* --- */

const POLYGON_END = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)';
const POLYGON_MID = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
const POLYGON_STR = 'polygon(0 0, 100% 0, 100% 0, 0 0)';

useCool(el, props, () => ({
  enter: {
    str: { clipPath: POLYGON_STR, rotate: 0 },
    end: { clipPath: POLYGON_MID, rotate: props.rotate },
  },
  leave: {
    str: { clipPath: POLYGON_MID, rotate: props.rotate },
    end: { clipPath: POLYGON_END, rotate: 0 },
  },
}));

useCool(el, props, () => ({
  enter: { str: { scale: 1.25 }, end: { scale: 1 } },
  nodes: el.value ? el.value.querySelector('img') : null,
}));
</script>

<template>
  <div
    :class="['CoolPhoto', { border, polaroid }]"
    :style="{ rotate: `${rotate}deg` }"
    ref="el"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.CoolPhoto {
  @include flex;
  overflow: hidden;

  &.polaroid {
    border: 24px solid $neutral-white;
    border-bottom-width: 72px;
  }

  & > :deep(img) {
    max-height: 100%;
    min-height: 24px;
    width: 100%;
  }
  &.border > :deep(img) {
    border: 2px solid $neutral-700;
  }
}
</style>
