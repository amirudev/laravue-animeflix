<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <!-- <div class="bg-black md:flex text-gray-300">
    <left-navbar/>
    <div class="flex-grow p-5"> -->
      <card-b :img="this.dataMovieList[0].img" :title="this.dataMovieList[0].title" :season="this.dataMovieList[0].season" :linkto="'Under Development'"/>
      <div class="text-gray-400 my-5">
        <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 0}" @click="changeAiringStatus(0)">On Going</button>
        <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 1}" @click="changeAiringStatus(1)">Completed</button>
        <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 2}" @click="changeAiringStatus(2)">Movies</button>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getLastWatched"/>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">For You</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getRecommendations"/>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">Recently watched in Bogor</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getRecentlyWatchedByRegion"/>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">Joy our new Anime everyday</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getRecentlyAdded"/>
      </div>
    <!-- </div>
    <right-navbar/>
  </div> -->
</template>
<script>
import CardB from "../components/cards/Card-B.vue"
import CardC from "../components/cards/Card-C.vue"

export default {
  name: 'app',
  data: () => ({
    isNavbarToggled: false,
    airingStatus: 1,
  }),
  props: ['dataMovieList'],
  components: {
    CardB,
    CardC
  },
  methods: {
      toggleNavbar(){
          this.isNavbarToggled = !this.isNavbarToggled
      },
      changeAiringStatus(status){
        this.airingStatus = status
      }
  },
  computed: {
    getLastWatched(){
      // LW = Last Watched
      return this.dataMovieList.filter(movie => {
        if(movie.listType.includes('LW')){
          return movie.airingStatus == this.airingStatus
        }
      })
    },
    getRecommendations(){
      // RC = Recommendations
      return this.dataMovieList.filter(movie => {
        if(movie.listType.includes('RC')){
          return movie.airingStatus == this.airingStatus
        }
      })
    },
    getRecentlyWatchedByRegion(){
      // RW = Region Watched
      return this.dataMovieList.filter(movie => {
        if(movie.listType.includes('RW')){
          return movie.airingStatus == this.airingStatus
        }
      })
    },
    getRecentlyAdded(){
      // No Conditional, All Movies
      return this.dataMovieList.filter(movie => {
        return movie.airingStatus == this.airingStatus
      })
    },
  }
}
</script>