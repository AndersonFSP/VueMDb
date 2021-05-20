<template>
  <div class="home">
    <Banner/>
    <Search @searchMovies="onSearch"/>
    <CardsMovies :movies="movies"/>
  </div>
</template>

<script>
import Banner from '../components/banner/Banner';
import Search from '../components/search/Search';
import CardsMovies from '../components/card/CardsMovies';
import axios from '../service/axios.js';

export default {
  name: 'Home',
  components: {
    Banner,
    Search,
    CardsMovies
  },
  data() {

    return {
      movies: []
    }
  },
  methods: {
    async onSearch(value) {
      if(!value)
        return

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

<style>
 
</style>
