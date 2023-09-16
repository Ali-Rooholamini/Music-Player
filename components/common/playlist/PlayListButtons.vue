<template>
  <div class="play-list-buttons_wrapper">
    <button>
      <SvgRenderer iconName="unfill-circle-play" :width="18" :height="15" />
      Play
    </button>
    <button>
      <SvgRenderer iconName="shuffle" :width="17" :height="14" />
      Shuffle
    </button>
  </div>
</template>

<script>
import SvgRenderer from "~/components/global/SvgRenderer.vue";
export default {
  components: {
    SvgRenderer,
  },
};
</script>

<style lang="scss" scoped>
.play-list-buttons_wrapper {
  position: relative;
  width: 100%;
}
button {
  font-size: 15px;
  height: 44px;
  border-radius: 80px;

  &:first-of-type {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    min-width: 60%;
    background-color: $color-white;
    color: $color-black;
    padding-right: 20px;

    div svg > path {
      color: $color-black;
    }
  }

  &:last-of-type {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 50%;
    background-color: $color-black;
    color: $color-white;
    position: absolute;
    right: 0;
  }
}
</style>
