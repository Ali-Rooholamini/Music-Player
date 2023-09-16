<template>
  <div>
    <PlayListHeader title="Playlist" :hasMenuButton="true" />
    <PlayList class="playlist" />
  </div>
</template>

<script>
import PlayListHeader from "~/components/common/PlayListHeader.vue";
import PlayList from "~/components/page/PlayList.vue";
export default {
  components: {
    PlayListHeader,
    PlayList,
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  margin-top: 60px;
}
</style>
