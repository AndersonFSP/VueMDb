<template>
  <div class="banner__detalhes">
    <h1>Django unchained (2012)</h1>
    <h2>
      With the help of a German bounty-hunter, a 
      freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.
    </h2>
  </div>
</template>

<script>
export default {
  name: "BannerDetail"
}
</script>

<style lang="scss">
  .banner__detalhes {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    left:0;
    right: 0;
    bottom: 0;
    padding: 1rem;
  
    h1 {
      color: #fff;
      margin-bottom:16px;
    }
}
</style>