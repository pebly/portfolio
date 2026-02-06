<script setup lang="ts">
import nexyo1 from '@/assets/projects/nexyo/nexyo-1.jpg';
import nexyo2 from '@/assets/projects/nexyo/nexyo-2.jpg';
import nexyo3 from '@/assets/projects/nexyo/nexyo-3.jpg';
// import nexyo4 from '@/assets/projects/nexyo/nexyo-4.jpg';

import CoolPhoto from '@/components/cool/CoolPhoto.vue';
import SimplePage from '@/components/common/SimplePage.vue';

defineProps<{ gsap: GSAP }>();
</script>

<template>
  <SimplePage :gsap hero="NEXYO">
    <section>
      <div class="View layout-2">
        <div class="Flex">
          <span class="Text">
            NEXYO was my first paid project, working in a team of 5 developers
            (2 frontend, 2 backend, plus a tech-lead). We built a telemedicine
            SaaS platform to make online therapy more accessible during the
            COVID-19 pandemic.
          </span>

          <span class="Text">
            This project taught me so much about professional development and
            teamwork. I developed the frontend architecture from scratch,
            focusing on performance, reusability, and user experience, while
            integrating real-time features for scheduling, consultations, and
            payment processing.
          </span>

          <span class="Text">
            Unfortunately, the platform is no longer available online as the
            project was closed due to lack of clients.
          </span>
        </div>
      </div>

      <div class="View layout-3">
        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="nexyo1" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="-4">
          <img :src="nexyo2" />
        </CoolPhoto>

        <CoolPhoto :gsap border mode="show" :rotate="4">
          <img :src="nexyo3" />
        </CoolPhoto>
      </div>
    </section>
  </SimplePage>
</template>
