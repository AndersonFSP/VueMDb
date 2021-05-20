<template>
  <div class="cabecalho__boxtitulo">
    <router-link to="/">
      <h1>Vue<span>MDb</span></h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle"
}
</script>

<style lang="scss">
  .cabecalho__boxtitulo {
    background-color: #f3CE13;
    border-radius: 5%;
    padding: 4px;

    a {
      text-decoration: none;
    }

    h1 {
      color: #287a55;

      span {
        color: #000000;
      }
    }
  }
</style>