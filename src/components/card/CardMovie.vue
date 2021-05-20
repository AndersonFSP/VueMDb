<template>
  <div class="movie">
    <img class="movie__image" :src="movie.Poster" alt="movie image">
    <div class="movie__type">{{ movie.Type }}</div>
    <div class="movie__content">
      <div class="movie__tittle">{{ movie.Title }} ({{ movie.Year }})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
  props: {
    movie: {
      type: Object,
    }
  },
}
</script>

<style lang="scss">
 
  .movie {
    background: #3d2b1f;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    position: relative;

    @media screen and (min-width:0px) {
      width: calc(100% - 1.6rem);
      margin-right: 1rem;
    }

    @media screen and (min-width:576px) {
      width: calc(50% - 1.6rem);
      margin-right: 1rem;
    }

    @media screen and (min-width:768px) {
      width: calc(33% - 1.6rem);
      margin-right: 1rem;
    }

    @media screen and (min-width:992px) {
      width: calc(25% - 2rem);
      margin-right: 1rem;
    }

    @media screen and (min-width:1200px) {
      width: calc(20% - 3rem);
      margin-right: 2rem;
    }
  }

  .movie__content {
    margin-left: 1rem;
    padding: 1rem 0 1rem 0;
  }
  .movie__image {
    width: 100%;
    height: 310px;
  }

  .movie__type {
    background-color: #800080;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
    position: absolute;
  }
  
</style>