<template>
  <div class="home">
    <Banner/>
    <Search />
  </div>
</template>

<script>
import Banner from '../components/banner/Banner';
import Search from '../components/search/Search'

export default {
  name: 'Home',
  components: {
    Banner,
    Search
  }
}
</script>

<style lang="scss">
 
</style>
