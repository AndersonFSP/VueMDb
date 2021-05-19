<template>
  <section class="banner">
    <BannerImage/>
    <BannerDetail/>
  </section>
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