<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import snapHobbies from '@/assets/home/projects-hobbies.jpg';
import snapSpectralBit from '@/assets/home/projects-spectralbit.jpg';
import snapNexyo from '@/assets/home/projects-nexyo.jpg';
import snapMedInsider from '@/assets/home/projects-medinsider.jpg';

import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import Button from '@/components/common/Button.vue';
import Container from '@/components/common/Container.vue';

/* --- */

defineProps<{ gsap: GSAP }>();

const active = ref(-1);

const PROJECTS = [
  {
    head: 'hobbies',
    icon: 'streamline-freehand:work-from-home-user-pet-cat',
    meta: 'free time',
    snap: snapHobbies,
    text: 'Side-projects, hobbies, and things I build for fun',
  },
  {
    head: 'spectralbit',
    icon: 'streamline-freehand:video-game-controller-team',
    meta: 'high school project',
    snap: snapSpectralBit,
    text: 'Game development and teaching others',
  },
  {
    head: 'nexyo',
    icon: 'streamline-freehand:business-deal-handshake',
    meta: 'work experience',
    snap: snapNexyo,
    text: 'First paid project. Real deadlines. Real lessons',
  },
  {
    head: 'medinsider',
    icon: 'streamline-freehand:messages-people-woman-heart',
    meta: 'work experience',
    snap: snapMedInsider,
    text: 'What I work on today, and why it matters to me',
  },
];
</script>

<template>
  <Container>
    <section
      :class="['Projects', { active: active !== -1 }]"
      @mouseleave="active = -1"
    >
      <div
        @mouseenter="active = i"
        :class="['Card', { active: active === i }]"
        v-for="({ head, icon, meta, text }, i) of PROJECTS"
      >
        <span class="Head">{{ head }}</span>
        <Icon class="Icon" :icon />

        <div class="Flex" v-if="active === i">
          <span class="Meta">{{ meta }}</span>
          <span class="Text">{{ text }}</span>

          <Button :to="head === 'hobbies' ? `/${head}` : `/projects/${head}`">
            read more
          </Button>
        </div>
      </div>

      <CoolPhoto
        :class="`child-${i + 1}`"
        :gsap
        :mode="active === i ? 'show' : 'hide'"
        v-for="({ snap }, i) of PROJECTS"
      >
        <img :src="snap" />
      </CoolPhoto>
    </section>
  </Container>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

section.Projects {
  @include flex;
  align-items: stretch;
  gap: 24px;
  min-height: 960px;
  position: relative;
  z-index: 10;

  & > .Card {
    @include flex-column;
    background: $neutral-700;
    justify-content: center;
    padding: 48px;
    padding-right: calc(24px + 72px + 24px);
    position: relative;
    transition-duration: 256ms;
    transition-property: background, opacity, width;
    width: calc(25% - 24px * 3 / 4);
    z-index: 5;

    &.active {
      background: $neutral-900;
      outline: 2px solid $primary-500;
      outline-offset: -2px;
    }

    & > span.Head {
      color: $neutral-300;
      font-size: 72px;
      font-weight: 700;
      position: absolute;
      right: 24px;
      text-transform: uppercase;
      top: 24px;
      transition-duration: 256ms;
      transition-property: color;
      writing-mode: vertical-lr;
    }
    &.active > span.Head {
      color: $primary-500;
    }

    & > svg.Icon {
      bottom: 24px;
      color: $neutral-500;
      position: absolute;
      right: 24px;
      transition-duration: 256ms;
      transition-property: width;
      height: auto;
      width: 96px;
    }
    &.active > svg.Icon {
      color: $primary-700;
      width: 192px;
    }

    & > .Flex {
      @include flex-column;
      gap: 16px;

      & > span.Meta {
        color: $primary-500;
        font-size: 14px;
        text-transform: uppercase;
      }

      & > span.Text {
        font-family: 'Bricolage Grotesque';
        font-size: 32px;
        line-height: 1.25;
      }

      & > .Button {
        margin-top: 16px;
      }
    }
  }
  &.active > .Card {
    width: calc(50% / 3 - 24px * 3 / 4);

    &.active {
      width: calc(50% - 24px * 3 / 4);
    }
    &:not(.active) {
      opacity: 0.25;
    }
  }

  & > .CoolPhoto {
    max-height: 75%;
    max-width: calc(50% / 3 * 2 + 24px * (1 - 3 / 2));
    pointer-events: none;
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    z-index: 10;

    &.child-1 {
      right: calc(50% / 3 + 24px * (1 - 3 / 4));
    }

    &.child-2 {
      right: 0;
    }

    &.child-3 {
      left: 0;
    }

    &.child-4 {
      left: calc(50% / 3 + 24px * (1 - 3 / 4));
    }
  }
}
</style>
