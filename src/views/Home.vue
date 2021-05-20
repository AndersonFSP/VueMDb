<template>
  <div class="home">
    <Banner/>
    <Search @searchMovies="onSearch"/>
    <section class="movies">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <img class="movie__image" :src="movie.Poster" alt="movie image">
          <div class="movie__type">{{ movie.Type }}</div>
        <div class="movie__content">
          <div class="movie__year">{{ movie.Year }}</div>
          <div class="movie__tittle">{{ movie.Title }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '../components/banner/Banner';
import Search from '../components/search/Search'
import axios from '../service/axios.js';

export default {
  name: 'Home',
  components: {
    Banner,
    Search
  },
  data() {

    return {
      movies: []
    }
  },
  methods: {
    async onSearch(value) {
      const search = value;
      try {
        const res = await axios.get(`${this.apiKey}&s=${search}`);
        this.movies = res.data.Search; 
      }catch(e) {
        console.log(e);
      }
    }
  },
  computed: {
    apiKey() {
      return "?apikey=681b16c8"
    }
  }
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

    .movie {
      /* position: relative; */
      display: flex;
      flex-direction: column;
      background: #696969;
      margin-bottom: 3rem;

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
    .movie__image {
      width: 100%;
      height: 310px;
    }
  }
</style>
