<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

import CoolLink from '@/components/cool/CoolLink.vue';
import CoolPhoto from '@/components/cool/CoolPhoto.vue';

import Button from '@/components/common/Button.vue';
import Container from '@/components/common/Container.vue';

defineProps<{ gsap: GSAP }>();

/* --- */

// ! AI !
const time = ref('');
let interval: ReturnType<typeof setInterval>;

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const h = hours % 12 || 12;
  time.value = `${String(h).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
}

onMounted(() => {
  updateTime();
  interval = setInterval(updateTime, 5000);
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
  <Container fluid>
    <section class="LetsConnect">
      <div class="Card">
        <div class="Flex">
          <span class="Head">
            <span>let's connect!</span>
          </span>

          <span class="Text">
            I'm always up for a good conversation&mdash;whether it's about
            projects, collaboration opportunities, or just exchanging ideas
          </span>

          <Button href="mailto:pebly.dev@gmail.com">say hello</Button>
        </div>

        <div class="Contact">
          <div class="Flex">
            <span class="Head">phone</span>

            <CoolLink href="tel:+40735571420" text="(+40) 735 571 420" />
          </div>

          <div class="Flex">
            <span class="Head">social</span>

            <CoolLink
              href="https://chess.com/member/pebly-dev"
              target="_blanc"
              text="chess.com"
            />
            <CoolLink
              href="https://github.com/pebly"
              target="_blanc"
              text="github"
            />
            <CoolLink
              href="https://instagram.com/pebly.dev"
              target="_blanc"
              text="instagram"
            />
            <CoolLink
              href="https://linkedin.com/in/pebly"
              target="_blanc"
              text="linkedin"
            />
          </div>
        </div>

        <footer>
          <span class="Copy">
            {{ new Date().getFullYear() }} &copy; paul tanasă
          </span>

          <CoolLink
            href="https://github.com/pebly"
            target="_blanc"
            text="crafted by pebly"
            underline
          />

          <CoolLink
            href="https://github.com/pebly/portfolio"
            target="_blanc"
            text="curious about the code?"
            underline
          />
        </footer>
      </div>

      <div class="Deco">
        <div class="Flex">
          <span class="Location">cluj-napoca, ro</span>

          <span class="Time">{{ time }}</span>
        </div>

        <CoolPhoto :gsap mode="show">
          <img src="@/assets/home/lets-connect.jpg" />
        </CoolPhoto>
      </div>
    </section>
  </Container>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

section.LetsConnect {
  @include flex;
  align-items: stretch;
  background: $neutral-800;
  justify-content: space-between;
  position: relative;
  text-transform: uppercase;

  & > .Card {
    @include flex-column;
    gap: 96px;
    padding: 48px;
    z-index: 10;

    & > footer {
      @include flex;
      gap: 48px;
      margin-top: auto;

      & > span.Copy {
        color: $neutral-500;
        font-size: 14px;
      }

      & > .CoolLink {
        color: $neutral-500;
        font-size: 14px;
      }
    }

    & > .Contact {
      @include flex;
      gap: 48px;
      max-width: $breakpoint-sm;

      & > .Flex {
        @include flex-column;
        gap: 16px;

        & > span.Head {
          color: $primary-500;
        }

        & > .CoolLink {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }

    & > .Flex {
      @include flex-column;
      gap: 16px;

      & > span.Head {
        @include head-96;

        & > span {
          font-weight: 700 !important;
        }
      }

      & > span.Text {
        color: $neutral-500;
        line-height: 1.5;
        max-width: 640px;
      }

      & > .Button {
        margin-top: 16px;
      }
    }
  }

  & > .Deco {
    @include flex-column;
    height: 100%;
    justify-content: space-between;
    max-width: $breakpoint-xs;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;

    & > .Flex {
      @include flex-column;
      align-items: flex-end;
      padding: 48px;
      gap: 8px;

      & > .Location {
        color: $neutral-500;
      }

      & > .Time {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}
</style>
