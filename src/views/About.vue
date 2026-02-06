<script setup lang="ts">
import about1 from '@/assets/about/about-1.jpg';
import about2 from '@/assets/about/about-2.jpg';

import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import Button from '@/components/common/Button.vue';
import SimplePage from '@/components/common/SimplePage.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <SimplePage :gsap hero="About me">
    <section>
      <div class="View layout-1">
        <CoolPhoto :gsap mode="show" polaroid :rotate="4">
          <img :src="about1" />
        </CoolPhoto>

        <div class="Flex">
          <span class="Text">
            Coding has been a genuine passion since a very young age. What
            started as a simple curiosity quickly grew into a drive to build
            real things that actually make a difference.
          </span>

          <Button href="/hobbies">see hobbies</Button>
        </div>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            For the past three years, I've been working as a Full-Stack
            Developer at MedInsider, where our mission is helping students get
            into medical universities through digital learning platforms.
          </span>

          <Button href="/projects/medinsider">read more</Button>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap mode="show" polaroid>
          <img :src="about2" />
        </CoolPhoto>
      </div>
    </section>
  </SimplePage>
</template>
