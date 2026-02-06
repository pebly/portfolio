<script lang="ts" setup>
import { gsap, ScrollTrigger, SplitText } from 'gsap/all';
import { VueLenis } from 'lenis/vue';
import { ref, watchEffect } from 'vue';

/* --- */

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const lenisRef = ref();

watchEffect((onCleanup) => {
  if (!lenisRef.value || !lenisRef.value.lenis) return;

  lenisRef.value.lenis.on('scroll', ScrollTrigger.update);

  const update = (time: number) => lenisRef.value.lenis.raf(time * 1000);

  gsap.ticker.add(update);

  gsap.ticker.lagSmoothing(0);

  onCleanup(() => gsap.ticker.remove(update));
});
</script>

<template>
  <VueLenis :options="{ autoRaf: false }" ref="lenisRef" root>
    <RouterView v-slot="{ Component }">
      <component :gsap :is="Component" />
    </RouterView>
  </VueLenis>
</template>

<style lang="scss">
@use '@/styles/main.scss';

#app {
  min-width: 1280px;
}
</style>
