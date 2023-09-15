<template>
  <div class="play-list-header">
    <button @click="$emit('backButton')">
      <SvgRenderer iconName="arrowLeft" :width="9" :height="15" />
    </button>
    <strong>
      <span>{{ title }}</span>
    </strong>
    <div v-if="hasMenuButton" class="play-list-header_menu-btn">
      <button @click="isMenuOpen = true">
        <SvgRenderer iconName="menu" :width="10" :height="12" />
      </button>
      <ul
        v-show="isMenuOpen"
        v-click-outside="
          () => {
            isMenuOpen = false;
          }
        "
      >
        <li><button>Choose Music Folder</button></li>
      </ul>
    </div>
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
    hasMenuButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.play-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .play-list-header_menu-btn {
    position: relative;
    ul {
      background-color: hsla(0, 0%, 32%, 0.5);
      padding: 5px 10px;
      position: absolute;
      top: 35px;
      right: 5px;
      min-width: 160px;
    }
  }
}
</style>
