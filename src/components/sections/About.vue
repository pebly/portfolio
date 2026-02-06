<script setup lang="ts">
import { onMounted } from 'vue';

import Button from '@/components/common/Button.vue';
import Container from '@/components/common/Container.vue';

const props = defineProps<{ gsap: GSAP }>();

onMounted(() => {
  const timeline = props.gsap.timeline({
    scrollTrigger: {
      end: '+=2048px 0',
      // markers: true,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      start: '0 0',
      trigger: 'section.About',
    },
  });

  /* prettier-ignore */
  const KFL = { 75: { opacity: 1, rotation: -8, x: '-125%', y: '25%' } };

  timeline.fromTo(
    'section.About > .CV > .Paper.l',
    { rotation: 0, x: 0, y: 0 },
    { duration: 1, keyframes: KFL },
    0,
  );

  /* prettier-ignore */
  const KFR = { 75: { opacity: 1, rotation: 8, x: '125%', y: '-25%' }, 100: { opacity: 0 } };

  timeline.fromTo(
    'section.About > .CV > .Paper.r',
    { rotation: 0, x: 0, y: 0 },
    { duration: 1, keyframes: KFR },
    0,
  );

  /* prettier-ignore */
  const KFH = { 25: { opacity: 0 }, 50: { opacity: 1 }, 75: { opacity: 1 }, 100: { opacity: 0 } };

  timeline.fromTo(
    'section.About > .CV > .Hello',
    { rotation: 0, opacity: 0, y: '48px' },
    { duration: 1, keyframes: KFH, y: 0 },
    0,
  );

  /* --- */

  timeline.to(
    'section.About > .CV > .Paper.l',
    { duration: 1, rotation: 8, x: 0, y: '128px' },
    '-=0.25',
  );

  timeline.to('section.About > .CV > .Paper.l', { duration: 1, opacity: 0 });

  timeline.to(
    'section.About > .CV > .Avatar > img',
    { duration: 0.05, opacity: 1 },
    '-=1',
  );

  timeline.fromTo(
    'section.About > .CV > .Avatar > img',
    { opacity: 0 },
    {
      '--mask-radius': '100%',
      duration: 1.2,
      ease: 'power2',
    },
    '-=1',
  );

  timeline.to(
    'section.About > .CV > .Avatar',
    { duration: 1, left: 0, rotation: 0, top: '50%', translateY: '-50%' },
    '-=1',
  );

  timeline.to(
    'section.About > .CV > .Avatar > img',
    {
      duration: 1,
      left: 0,
      rotation: 4,
      scale: 1.05,
      top: '50%',
      translateY: '-50%',
    },
    '-=1',
  );

  timeline.from(
    'section.About > .CV > .Intro',
    { duration: 1, y: '48px', opacity: 0 },
    '-=0.75',
  );
});
</script>

<template>
  <Container>
    <section class="About">
      <div class="CV">
        <div class="Avatar">
          <img src="@/assets/home/about-avatar.jpg" />
        </div>

        <span class="Hello">
          Hello there,
          <span>I'm Paul!</span>
        </span>

        <div class="Intro">
          <span class="Head">
            I am a Full-Stack Developer with
            <span>3+ years of experience</span>
          </span>

          <Button to="/about">about me</Button>
        </div>

        <div class="Paper l"><span /></div>
        <div class="Paper r"><span /></div>
      </div>
    </section>
  </Container>
</template>

<style lang="scss">
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

section.About {
  @include flex-column;
  align-items: center;
  min-height: calc(1280px - 160px);
  // margin-bottom: -256px;

  & > .CV {
    @include flex;
    aspect-ratio: 210 / 297; /* A4 */
    max-width: 768px;
    position: relative;
    width: 100%;

    & > .Avatar {
      height: 100%;
      left: 0;
      pointer-events: none;
      position: absolute;
      rotate: 8deg;
      top: 128px;
      width: 50%;
      z-index: 10;

      & > img {
        --mask-radius: 0%;
        clip-path: circle(max(62px, var(--mask-radius)) at 166px 208px);
        height: auto;
        left: -34px;
        position: absolute;
        top: -106px;
        width: 360px;
      }
    }

    & > .Hello {
      @include head-48;
      left: 50%;
      max-width: 320px;
      position: absolute;
      top: 256px;
      translate: -50% 0;
    }

    & > .Intro {
      @include flex-column;
      gap: 16px;
      left: calc(50% + 24px);
      max-width: calc(50% - 24px);
      position: absolute;
      top: 50%;
      translate: 0 -50%;

      & > span.Head {
        @include head-24;
      }

      & > .Button {
        margin-top: 16px;
      }
    }

    & > .Paper {
      background-image: url('@/assets/home/about-cv.jpg');
      height: 100%;
      pointer-events: none;
      transform-origin: center;
      width: 50%;
      z-index: 5;

      &.l {
        background-position: left;
      }
      &.r {
        background-position: right;
      }
    }
  }
}
</style>
