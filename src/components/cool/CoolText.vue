<script lang="ts" setup>
import { SplitText } from 'gsap/SplitText';
import { ref } from 'vue';
import { type CoolProps, useCool } from '../composables/useCool';

const el = ref<HTMLElement>();

const props = withDefaults(defineProps<CoolProps>(), { mode: 'auto' });

/* --- */

useCool(el, props, () => {
  const { words } = SplitText.create(el.value || null, { type: 'words' });

  return {
    enter: {
      str: { opacity: 0.25, y: 24 },
      end: { opacity: 1, stagger: { amount: 0.25 }, y: 0 },
    },
    nodes: words,
  };
});
</script>

<template>
  <div class="CoolText" ref="el"><slot /></div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.CoolText {
  width: fit-content;
}
</style>
