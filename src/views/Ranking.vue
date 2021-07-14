<template>
<div class="my-5">
    <h1 class="text-2xl font-bold">RANKING</h1>
</div>
<div class="text-gray-400 my-5">
  <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 0}" @click="changeAiringStatus(0)">On Going</button>
  <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 1}" @click="changeAiringStatus(1)">Completed</button>
  <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 2}" @click="changeAiringStatus(2)">Movies</button>
</div>
<div class="grid grid-cols-2">
    <div class="bg-gray-800 rounded p-3 m-1">
        <p class="font-bold text-xl">Most Watched Anime</p>
        <card-f :index="index + 1" :title="movie.title" :views="movie.views" :img="movie.img" v-for="(movie, index) in getRankedMovie.slice(0, 10)" :key="movie.id"/>
    </div>
    <div>
      <div class="bg-gray-800 rounded p-3 m-1">
        <p class="font-bold text-xl">Action</p>
        <card-f :index="index + 1" :title="movie.title" :views="movie.views" :img="movie.img" v-for="(movie, index) in getMovieByGenre('ACT').slice(0, 3)" :key="movie.id"/>
      </div>
      <div class="bg-gray-800 rounded p-3 m-1">
        <p class="font-bold text-xl">Slice Of Life</p>
        <card-f :index="index + 1" :title="movie.title" :views="movie.views" :img="movie.img" v-for="(movie, index) in getMovieByGenre('SOL').slice(0, 3)" :key="movie.id"/>
      </div>
      <div class="bg-gray-800 rounded p-3 m-1">
        <p class="font-bold text-xl">Comedy</p>
        <card-f :index="index + 1" :title="movie.title" :views="movie.views" :img="movie.img" v-for="(movie, index) in getMovieByGenre('COM').slice(0, 3)" :key="movie.id"/>
      </div>
    </div>
</div>
</template>
<script>
import CardF from "../components/cards/Card-F.vue"

export default {
  name: 'app',
  data: () => ({
    isNavbarToggled: false,
    airingStatus: 1,
    moviesList: []
  }),
  props: ['dataMovieList'],
  components: {
    CardF
  },
  methods: {
      toggleNavbar(){
          this.isNavbarToggled = !this.isNavbarToggled
      },
      changeAiringStatus(status){
        this.airingStatus = status
      },
  },
  mounted(){
    this.moviesList = this.dataMovieList
  },
  computed: {
    getMoviesList(){
      return this.moviesList.filter(movie => {
        return movie.airingStatus == this.airingStatus
      })
    },
    getRankedMovie(){
      return this.getMoviesList.slice().sort((a, b) => {
        return a.views - b.views
      }).reverse()
    },
    getMovieByGenre(){
      return (genre) => this.getRankedMovie.filter(movie => {
        return movie.genres.indexOf(genre) > 0
      })
    },
  }
}
</script>