import { createRouter, createWebHistory } from 'vue-router';

import About from './views/About.vue';
import Hobbies from './views/Hobbies.vue';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

import MedInsider from './views/Projects/MedInsider.vue';
import NEXYO from './views/Projects/NEXYO.vue';
import SpectralBit from './views/Projects/SpectralBit.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { component: Home, path: '/' },
    { component: About, path: '/about' },
    { component: Hobbies, path: '/hobbies' },

    { component: MedInsider, path: '/projects/medinsider' },
    { component: NEXYO, path: '/projects/nexyo' },
    { component: SpectralBit, path: '/projects/spectralbit' },

    { component: NotFound, path: '/:anything*' },
  ],
  scrollBehavior(to, _, saved) {
    console.log(to.hash);

    if (saved) return saved;
    if (to.hash === '#home') return { behavior: 'smooth', top: 0 };
    if (to.hash)
      return {
        behavior: 'smooth',
        ...(to.hash === '#home' ? { top: 0 } : { el: to.hash }),
      };
    return { top: 0 };
  },
});

export default router;
