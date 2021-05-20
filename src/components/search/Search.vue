<template>
  <form class="form" @submit.prevent="searchMovies">
    <SearchBtn v-model="busca" placeholder="Search VueMDb.."/>
    <SearchSubmit/>
  </form>
</template>

<script>
import SearchBtn from '../buttom/SearchBtn';
import SearchSubmit from '../buttom/SearchSubmit';

export default {
  name: "search",
  components: {
    SearchBtn,
    SearchSubmit
  },
  data() {

    return {
      busca: ""
    }
  },

  methods: {
    searchMovies() {
      this.$emit("searchMovies", this.busca)
    }
  }
}
</script>

<style lang="scss">
  form {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  /* .form__submit {
    padding: 6px;
    font-size: 17px;
    border: none;
    border-radius: 3px;
  } */
</style>