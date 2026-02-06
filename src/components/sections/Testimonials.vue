<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import avatarAlexa from '@/assets/home/testimonials-alexa.jpg';
import avatarRares from '@/assets/home/testimonials-rares.jpg';

import CoolLink from '@/components/cool/CoolLink.vue';
import Container from '@/components/common/Container.vue';

defineProps<{ gsap: GSAP }>();

const TESTIMONIALS = [
  {
    avatar: avatarRares,
    meta: 'SaaS & E-commerce Entrepreneur',
    name: 'Rareș Josanu',
    text: [
      'As a member of my development team, Paul successfully implemented and fixed key features in our client\'s telemedicine platform "<span>Nexyo</span>" by using his FrontEnd development skills.',

      'He is a great team player and demonstrates his communication and understanding skills with every occasion.',

      'I really liked working with Paul and I can recommend him as a great FrontEnd/Full Stack JS Developer.',
    ],
  },
  {
    avatar: avatarAlexa,
    meta: 'Founder of MedInsider',
    name: 'Alexandra Osman',
    text: [
      "I've had the privilege of working closely with Paul at <span>MedInsider</span>, and I can't say enough good things about him. He's not only an exceptionally skilled full-stack developer&mdash;he's also an innovative thinker who consistently pushes our projects to new heights. Whether tackling back-end integrations or designing smooth, user-friendly interfaces, Paul brings a blend of technical prowess and creativity that's rare to find.",

      "Beyond his coding expertise, Paul stands out for his proactive problem-solving and collaborative spirit. He frequently steps up to help others on the team, sharing his knowledge and ensuring we all move forward together. It's that generosity and commitment to excellence that truly sets him apart. His work ethic is truly beyond anything I've ever seen.",

      "If you're looking for someone who can deliver top-notch results under tight deadlines and evolve with the demands of a fast-paced environment, Paul is your guy. I highly recommend him for any team or project seeking a developer who's both deeply competent and a joy to work with.",
    ],
  },
];
</script>

<template>
  <Container>
    <section class="Testimonials">
      <div class="Flex">
        <span class="Head">
          Social proof?
          <span>Here.</span>
        </span>

        <span class="Text">
          My journey has been about constant growth, and that's only been
          possible because of the incredible people I've worked with people who
          challenged me, taught me, and inspired me to keep pushing beyond what
          I thought I could do.
        </span>
      </div>

      <div class="Flex">
        <div class="Card" v-for="{ avatar, meta, name, text } of TESTIMONIALS">
          <Icon class="Icon" icon="ph:quotes-duotone" />
          <span class="Text" v-for="html of text" v-html="html" />

          <div class="Human">
            <img class="Avatar" :src="avatar" />

            <div class="Flex">
              <span class="Name">{{ name }}</span>

              <span class="Meta">
                {{ meta }} &centerdot;
                <CoolLink
                  href="https://linkedin.com/in/pebly"
                  target="_blanc"
                  text="Read on LinkedIn"
                  underline
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

section.Testimonials {
  @include flex-column;
  align-items: center;
  gap: 64px;
  min-height: $breakpoint-sm;

  & > .Flex:first-child {
    @include flex-column;
    align-items: center;
    gap: 16px;

    & > span.Head {
      @include head-48;
      text-align: center;

      & > span {
        color: $primary-500;
      }
    }

    & > span.Text {
      color: $neutral-500;
      line-height: 1.5;
      max-width: $breakpoint-sm;
      text-align: center;
    }
  }

  & > .Flex:last-child {
    @include flex;
    align-items: center;

    & > .Card {
      @include flex-column;
      background: $neutral-700;
      border: 2px solid $neutral-500;
      gap: 16px;
      padding: 32px;

      &:first-child {
        rotate: 4deg;
      }
      &:last-child {
        border-color: $primary-500;
        rotate: -4deg;
      }

      & > .Human {
        @include flex;
        align-items: center;
        gap: 16px;
        margin-top: 16px;

        & > .Avatar {
          aspect-ratio: 1;
          border-radius: 999px;
          min-width: 64px;
          object-fit: cover;
          width: 64px;
        }

        & > .Flex {
          @include flex-column;
          gap: 8px;

          & > span.Meta {
            color: $neutral-500;
            line-height: 1.25;
          }

          & > span.Name {
            font-size: 20px;
          }
        }
      }

      & > .Icon {
        color: $primary-500;
        font-size: 48px;
      }

      & > .Text {
        line-height: 1.5;

        & > :deep(span) {
          color: $primary-500;
        }
      }
    }
  }
}
</style>
