<template>
   <header class="cabecalho">
      <HeaderTitle/>
      <HeaderLogo/>
    </header>
</template>

<script>
import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTittle';

export default {
  name: "AppHeader",
  components: {
    HeaderLogo,
    HeaderTitle
  }
}
</script>

<style lang="scss">
   .cabecalho {
    display: flex;
    background-color: #000000;
    padding: 0.8rem 0;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and(min-width: 0) {
      justify-content: center;
    }

    @media screen and(min-width: 768px) {
      justify-content: space-between;
    }
  }
</style>