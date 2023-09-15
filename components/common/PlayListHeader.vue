<template>
  <div class="play-list-header">
    <button @click="$emit('backButton')">
      <SvgRenderer iconName="arrowLeft" :width="9" :height="15" />
    </button>
    <strong>
      <span>{{ title }}</span>
    </strong>
  </div>
</template>

<script>
import SvgRenderer from "../global/SvgRenderer.vue";
export default {
  components: {
    SvgRenderer,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.play-list-header {
  display: flex;
  align-items: center;

  strong {
    width: 100%;
    > span {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
