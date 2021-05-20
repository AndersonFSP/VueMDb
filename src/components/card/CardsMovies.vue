<template>
  <section class="movies" v-if="movies">
    <CardMovie 
      v-for="movie in movies"  
      :key="movie.imdbID" 
      :movie="movie"
    />
  </section>
  <div v-else class="notfound">
    <h1>Movie Not Found :(</h1>
  </div>
</template>

<script>
import CardMovie from './CardMovie';

export default {
  name: "CardsMovies",
  components: {
    CardMovie
  },
  props: {
    movies: {
      type: [Array, undefined],
      // default: []
    }
  },
}
</script>

<style lang="scss">
  .movies {
    display: flex;
    flex-wrap: wrap;
    padding: 5rem 0.1rem 5rem 3rem; 

    @media screen and (min-width:992px) {
      padding: 5rem 0 0 5rem; 
    }

    @media screen and (min-width:1200px) {
      padding: 3rem auto; 
    }
  }

   .notfound {
    color: crimson;
    margin-left: 2rem;
    margin-bottom: rem;
  }
</style>