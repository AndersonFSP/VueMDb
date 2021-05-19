<template>
  <img 
    class="cabecalho__logo" 
    src="../../assets/logo.png" 
    alt="Vue logo" 
    width="50px"
  />
</template>

<script>
export default {
  name: "HeaderLogo"
}
</script>

<style lang="scss">
  .cabecalho__logo {
    @media screen and(min-width: 0) {
      display: none;
    }

    @media screen and(min-width: 768px) {
      display: block;
    }
  }
</style>