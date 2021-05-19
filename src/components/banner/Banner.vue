<template>
  <div class="banner">
    <BannerImage/>
    <BannerDetail/>
  </div>
</template>

<script>
import BannerImage from './BannerImage';
import BannerDetail from './BannerDetail';

export default {
  name: "Banner",
  components: {
    BannerImage,
    BannerDetail
  }
}
</script>

<style lang="scss">
   .banner {
    display: relative;
  }
</style>