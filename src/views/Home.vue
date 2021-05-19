<template>
  <div class="home">
    <div class="banner">
      <img class="banner__imagem"  alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
 
  }
}
</script>

<style lang="scss"> 
  .banner__imagem {
     background: url("https://images7.alphacoders.com/674/674731.jpg") no-repeat center / cover;;
     width: 100%;
     height: calc(100vh - 75px);
  }
</style>
