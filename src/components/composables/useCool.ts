import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted, ref, watch, type Ref } from 'vue';

/* prettier-ignore */
type CoolProps = { gsap: GSAP; mode: 'auto' | 'hide' | 'show' | 'scroll'; trigger?: Element | Element[] | null };

const useCool = (
  el: Ref<Element | undefined>,
  props: CoolProps,
  setup: () => {
    enter?: { end: gsap.core.Tween['vars']; str: gsap.core.Tween['vars'] };
    leave?: { end: gsap.core.Tween['vars']; str: gsap.core.Tween['vars'] };
    nodes?: Element | Element[] | null;
  },
) => {
  const OPTIONS = { duration: 0.5, ease: 'power1', overwrite: 'auto' };

  const tweenEnter = ref<gsap.core.Tween>();
  const tweenLeave = ref<gsap.core.Tween>();

  const scrollTrigger = computed(() => {
    if (!['auto', 'scroll'].includes(props.mode)) return;

    const scrollTrigger: gsap.core.Tween['vars']['scrollTrigger'] = {
      end: '256px bottom-=256px',
      // markers: true,
      start: '0 bottom-=256px',
      trigger: props.trigger || el.value,
    };

    if (props.mode === 'auto') {
      scrollTrigger.onEnter = onEnter;
      scrollTrigger.onLeaveBack = onLeave;
    } else if (props.mode === 'scroll') {
      scrollTrigger.scrub = 1;
    }

    return scrollTrigger;
  });

  const onEnter = () => {
    const { enter, nodes } = { enter: { end: {}, str: {} }, ...setup() };

    const params: any = { ...OPTIONS, ...enter.end, overwrite: 'auto' };

    if (props.mode === 'scroll') params.scrollTrigger = scrollTrigger.value;

    const target = nodes || el.value || null;

    tweenEnter.value = props.gsap.fromTo(target, { ...enter.str }, params);
  };

  const onLeave = () => {
    let { enter, leave, nodes } = { enter: { end: {}, str: {} }, ...setup() };

    leave ??= { end: enter.str, str: enter.end };

    const params: any = { ...OPTIONS, ...leave.end, overwrite: 'auto' };

    const target = nodes || el.value || null;

    tweenLeave.value = props.gsap.fromTo(target, { ...leave.str }, params);
  };

  onMounted(() => {
    if (props.mode === 'auto') {
      if (scrollTrigger.value) ScrollTrigger.create(scrollTrigger.value);
    } else if (props.mode === 'scroll') {
      onEnter();
    }

    if (props.mode !== 'scroll') {
      const { enter, nodes } = { enter: { end: {}, str: {} }, ...setup() };

      const target = nodes || el.value || null;

      props.gsap.set(target, enter.str);
    }

    if (props.mode === 'show') onEnter();
  });

  watch(
    () => props.mode,
    () => {
      if (props.mode === 'hide') {
        onLeave();
      } else if (props.mode === 'show') {
        onEnter();
      }
    },
  );
};

export { useCool, type CoolProps };
