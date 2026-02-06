<template>
  <div class="ScrollDown">
    <div class="Text">scroll</div>

    <div class="Mouse"><div class="Wheel" /></div>

    <div class="Text">down</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/vars/breakpoints.scss' as *;
@use '@/styles/vars/colors.scss' as *;
@use '@/styles/vars/mixins.scss' as *;

.ScrollDown {
  @include flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  & > .Text {
    @include text-up;
    color: $neutral-500;
    min-width: 72px;

    &:first-child {
      text-align: right;
    }
  }

  & > .Mouse {
    @include flex;
    border-radius: 999px;
    border: 2px solid $neutral-500;
    height: 48px;
    justify-content: center;
    width: 32px;

    & > .Wheel {
      @include flex;
      animation: scroll 1280ms ease infinite;
      background: $primary-500;
      border-radius: 999px;
      height: 4px;
      position: relative;
      width: 4px;

      @keyframes scroll {
        0% {
          height: 4px;
          opacity: 0;
          top: 8px;
        }
        50% {
          height: 8px;
          opacity: 1;
        }
        100% {
          height: 4px;
          opacity: 0;
          top: calc(8px + 8px + 4px);
        }
      }
    }
  }
}
</style>
