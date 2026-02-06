<script setup lang="ts">
import aigrile1 from '@/assets/projects/medinsider/aigrile-1.jpg';
import aigrile2 from '@/assets/projects/medinsider/aigrile-2.jpg';
import aigrile3 from '@/assets/projects/medinsider/aigrile-3.jpg';

import medinsider1 from '@/assets/projects/medinsider/medinsider-1.jpg';
import medinsider2 from '@/assets/projects/medinsider/medinsider-2.jpg';

import uni1 from '@/assets/projects/medinsider/uni-1.jpg';
import uni2 from '@/assets/projects/medinsider/uni-2.jpg';
import uni3 from '@/assets/projects/medinsider/uni-3.jpg';

import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import Button from '@/components/common/Button.vue';
import SimplePage from '@/components/common/SimplePage.vue';
import UniInsta from '@/components/UniInsta.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <SimplePage :gsap hero="MedInsider">
    <section>
      <div class="View layout-1">
        <CoolPhoto :gsap mode="show" polaroid :rotate="-4">
          <img :src="medinsider1" />
        </CoolPhoto>

        <div class="Flex">
          <span class="Text">
            For the past three years, I've been working as a Full-Stack
            Developer at MedInsider alongside an amazing team.
          </span>
          <span class="Text">
            Our mission is helping students get into medical universities
            through digital learning platforms&mdash;preparing them for one of
            the toughest exams in Romania, and our courses make a real
            difference.
          </span>
        </div>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            In spring 2023, a friend from the Nexyo days asked for FE help on a
            new client project. We took it from zero to launch in 1&ndash;2
            months. That became AiGrile, and in less than a year it became the
            best MCQ grid platform in Romania.
          </span>

          <Button href="https://aigrile.ro" target="_blanc">aigrile.ro</Button>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="aigrile1" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="-4">
          <img :src="aigrile2" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="aigrile3" />
        </CoolPhoto>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            After AiGrile's success, we moved to a more ambitious
            project&mdash;building an entire online university to prepare
            students for medical school exams.
            <br />
            We're currently the largest preparation center in Romania.
          </span>

          <Button href="https://uni.medinsider.ro" target="_blanc">
            uni.medinsider.ro
          </Button>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="uni1" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="-4">
          <img :src="uni2" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="uni3" />
        </CoolPhoto>
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            Working at MedInsider has been about growing together as a team.
            <br />
            Alexa has been an excellent manager who genuinely invested in our
            personal development first, which naturally improved how we work.
          </span>
        </div>
      </div>

      <div class="View layout-3">
        <UniInsta />
      </div>
    </section>

    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            Even though I work remotely, I stay connected with the team through
            team-buildings, on-site work weeks, and regular meetings. Working
            with such a talented team and helping thousands of students achieve
            their dreams has been one of the most rewarding experiences.
          </span>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" polaroid>
          <img :src="medinsider2" />
        </CoolPhoto>
      </div>
    </section>
  </SimplePage>
</template>
