<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header';

export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Sans", sans-serif;
  }

  body {
    background-color: #111111;
    color: #fff;
  }
</style>
