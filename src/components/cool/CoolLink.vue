<script lang="ts" setup>
import { gsap } from 'gsap';
import { ref } from 'vue';

const props = defineProps<{ text: string; underline?: boolean }>();

/* --- */

const tick = ref(0);

const timeout = ref();

const text = ref(props.text);

const onMouseEnter = (restart: boolean = false) => {
  if (restart) tick.value = 0;

  if (tick.value >= 8) return (text.value = props.text);

  const shuffle = gsap.utils.shuffle(props.text.split('')).join('');

  if (shuffle.startsWith(' ') || shuffle.endsWith(' ')) return onMouseEnter();

  text.value = shuffle;

  tick.value++;

  timeout.value = setTimeout(onMouseEnter, 64);
};

const onMouseLeave = () => {
  if (timeout.value) clearTimeout(timeout.value);

  text.value = props.text;
};
</script>

<template>
  <a
    :class="['CoolLink', { underline }]"
    @mouseenter="onMouseEnter(true)"
    @mouseleave="onMouseLeave"
    href="/#home"
  >
    {{ text }}
  </a>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.CoolLink {
  color: $neutral-300;
  cursor: pointer;
  transition-duration: 128ms;
  transition-property: color;
  width: fit-content;

  &.underline {
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  &:hover {
    color: $primary-500;
  }
}
</style>
