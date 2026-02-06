<script setup lang="ts">
import gohtml1 from '@/assets/hobbies/gohtml-1.jpg';
import gohtml2 from '@/assets/hobbies/gohtml-2.jpg';
import gohtml3 from '@/assets/hobbies/gohtml-3.jpg';

import gohtmlInfoed1 from '@/assets/hobbies/gohtml-infoed-1.jpg';
import gohtmlInfoed2 from '@/assets/hobbies/gohtml-infoed-2.jpg';

import planterra1 from '@/assets/hobbies/planterra-1.gif';
import planterra2 from '@/assets/hobbies/planterra-2.jpg';
import planterra3 from '@/assets/hobbies/planterra-3.jpg';

import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import Button from '@/components/common/Button.vue';
import SimplePage from '@/components/common/SimplePage.vue';
import CoolArrow from '@/components/cool/CoolArrow.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <SimplePage :gsap hero="Hobbies">
    <section>
      <div class="View layout-1">
        <div class="Flex">
          <span class="Text">
            People often expect a different answer when they ask what I do in my
            free time.
          </span>

          <span class="Text">
            "Programming for fun" is usually not the answer they expect, but I
            would lie if I would tell you it's otherwise.
          </span>

          <span class="Text">
            Many see coding only as a career path or as a way to make money. For
            me, it never was.
          </span>

          <Button href="/about">about me</Button>
        </div>

        <CoolPhoto :gsap mode="show" polaroid>
          <img :src="gohtmlInfoed1" />
        </CoolPhoto>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            Planterra started as an Arduino project for my girlfriend. She is
            passionate about biology and ecology, and that inspired the whole
            idea.
          </span>
        </div>

        <CoolPhoto :gsap border mode="show">
          <img :src="planterra1" />
        </CoolPhoto>
      </div>

      <div class="View layout-1" style="max-width: 1280px">
        <CoolPhoto :gsap border mode="show">
          <img :src="planterra3" />
        </CoolPhoto>

        <div class="Flex">
          <span class="Text">
            I designed everything from scratch, 3D-printed the parts, and used
            an Arduino to build an automatic watering system.
          </span>
          <span class="Text">
            It has a soil moisture sensor, its own water tank, and lights to
            help seeds grow faster.
          </span>
        </div>

        <CoolPhoto :gsap border mode="show">
          <img :src="planterra2" />
        </CoolPhoto>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            Another project I built is GoHTML, a simple HTML hosting service. I
            wanted to create a place where anyone could upload and share basic
            web pages easily.
          </span>
          <span class="Text">
            In fact, this portfolio website you're navigating right now is
            hosted on GoHTML. Give it a try using the link below.
          </span>

          <Button href="https://gohtml.io" target="_blanc">gohtml.io</Button>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="gohtml1" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="-4">
          <img :src="gohtml3" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="gohtml2" />
        </CoolPhoto>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            With GoHTML, I won 2nd place at the InfoEducation olympiad in 2022.
          </span>
          <span class="Text">
            The competition was a great experience&mdash;seeing what other
            developers had built, and being part of that community of young
            creators.
          </span>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap mode="show" polaroid>
          <img :src="gohtmlInfoed2" />
        </CoolPhoto>
      </div>
    </section>
  </SimplePage>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;
</style>
