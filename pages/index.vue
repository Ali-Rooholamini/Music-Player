<template>
  <div>
    <PlayListHeaderVue title="Playlist" :hasMenuButton="true" />
  </div>
</template>

<script>
import PlayListHeaderVue from "~/components/common/PlayListHeader.vue";
export default {
  components: {
    PlayListHeaderVue,
  },
};
</script>

<style lang="scss" scoped></style>
