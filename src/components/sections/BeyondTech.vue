<script lang="ts" setup>
import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import CoolSVG from '@/components/cool/CoolSVG.vue';

import Button from '@/components/common/Button.vue';
import Container from '@/components/common/Container.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <Container>
    <section class="BeyondTech">
      <span class="Head">
        Over the years, my projects have evolved from high school experiments
        and learning experiences into platforms that have made a
        <span>real impact on thousands of people's lives</span>
      </span>

      <div class="Card">
        <CoolPhoto :gsap mode="show">
          <img src="@/assets/home/beyond-tech.jpg" />
        </CoolPhoto>

        <div class="Flex">
          <span class="Text">
            Through all of this, I've learned that great software isn't about
            the technology you choose. The tools matter less than the
            approach&mdash;understanding who you're building for and what
            problems you're actually solving.
          </span>

          <span class="Text">
            What I'm most proud of at MedInsider isn't our tech stack, it's the
            students we've helped achieve their dreams, and knowing our work
            makes a real difference.
          </span>

          <Button to="/projects/medinsider">read more</Button>
        </div>
      </div>

      <CoolSVG :gsap mode="show">
        <svg viewBox="0 0 1000 800">
          <path
            d="M900 0V100A100 100 90 01800 200H100A100 100 90 000 300V700A100 100 90 00100 800H200"
          />
        </svg>
      </CoolSVG>
    </section>
  </Container>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

section.BeyondTech {
  @include flex-column;
  gap: 64px;
  min-height: $breakpoint-sm;
  padding: 128px 0 0 128px;
  position: relative;

  & > .Card {
    @include flex;
    gap: 128px;
    z-index: 10;

    & > .CoolPhoto {
      min-width: 480px;
      width: 480px;
    }

    & > .Flex {
      @include flex-column;
      gap: 32px;

      & > span.Text {
        line-height: 1.5;
      }
    }
  }

  & > .CoolSVG {
    left: 0;
    position: absolute;
    top: -256px;
    width: $breakpoint-lg;
    z-index: 5;
  }

  & > span.Head {
    @include head-48;
    font-size: 32px;
    z-index: 10;
  }
}
</style>
