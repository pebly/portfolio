<script lang="ts" setup>
import { ref, watch } from 'vue';
import { type CoolProps, useCool } from '../composables/useCool';

const el = ref<HTMLElement>();

const props = withDefaults(defineProps<CoolProps>(), { mode: 'auto' });

/* --- */

const length = ref(0);

useCool(el, props, () => {
  const nodes = el.value
    ? el.value.querySelector<SVGPathElement>('svg > path')
    : null;

  const strokeDashoffset = nodes ? nodes.getTotalLength() : 0;

  return {
    enter: {
      str: { strokeDashoffset, opacity: 0.25 },
      end: { strokeDashoffset: 0, opacity: 1 },
    },
    nodes,
  };
});

watch(
  () => el.value,
  () => {
    if (!el.value) return;

    const path = el.value.querySelector<SVGPathElement>('svg > path');

    if (path) length.value = path.getTotalLength();
  },
  { immediate: true },
);
</script>

<template>
  <div class="CoolSVG" ref="el">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.CoolSVG {
  @include flex;
  pointer-events: none;

  & > :deep(svg) {
    fill: none;
    overflow: visible;
    width: 100%;

    stroke: $primary-500;
    stroke-dasharray: v-bind(length);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 16px;
  }
}
</style>
