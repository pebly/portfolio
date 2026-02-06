<script setup lang="ts">
import devClubPoster from '@/assets/projects/spectralbit/dev-club-poster.jpg';

import game1 from '@/assets/projects/spectralbit/game-1.gif';
import game2 from '@/assets/projects/spectralbit/game-2.gif';
import game3 from '@/assets/projects/spectralbit/game-3.jpg';

import spectralbit1 from '@/assets/projects/spectralbit/spectralbit-1.jpg';
import spectralbit2 from '@/assets/projects/spectralbit/spectralbit-2.jpg';
import spectralbit3 from '@/assets/projects/spectralbit/spectralbit-3.jpg';

import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import SimplePage from '@/components/common/SimplePage.vue';
import Button from '@/components/common/Button.vue';
import CoolText from '@/components/cool/CoolText.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <SimplePage :gsap hero="SpectralBit">
    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            During my time in high school, I started SpectralBit with 2 friends.
            We wanted to create games for fun, for learning, and to share our
            work with others.
          </span>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="game1" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="-4">
          <img :src="game2" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="game3" />
        </CoolPhoto>
      </div>
    </section>

    <section>
      <div class="View layout-1" style="max-width: 1000px">
        <CoolPhoto :gsap mode="show">
          <img :src="devClubPoster" />
        </CoolPhoto>

        <div class="Flex">
          <span class="Text">
            At SpectralBit, we didn't just want to make games&mdash;we wanted to
            help others learn how to make them too.
          </span>
          <span class="Text">
            We started a Game Dev Club at our high school where we organized
            workshops to teach students the basics of game development, from
            programming fundamentals to game design principles.
          </span>
        </div>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            The team eventually dissolved, and SpectralBit evolved from a game
            dev group into a software development company. I built their landing
            page completely from scratch, translating detailed Figma prototypes
            into a responsive React application.
          </span>

          <Button href="https://spectral-bit.com" target="_blanc">
            spectral-bit.com
          </Button>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="spectralbit1" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="-4">
          <img :src="spectralbit2" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="spectralbit3" />
        </CoolPhoto>
      </div>
    </section>
  </SimplePage>
</template>
