<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <!-- <div class="bg-black md:flex text-gray-300">
    <left-navbar/>
    <div class="flex-grow p-5"> -->
      <card-b :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi No Nawa'" :genres="'Fantasy, Comedy, Scenery'" :linkto="'Under Development'"/>
      <div class="text-gray-400 my-5">
        <button class="font-bold mr-4" :class="{'text-gray-200': this.currentHighlight == 0}" @click="changeCurrentHighlight(0)">On Going</button>
        <button class="font-bold mr-4" :class="{'text-gray-200': this.currentHighlight == 1}" @click="changeCurrentHighlight(1)">Completed</button>
        <button class="font-bold mr-4" :class="{'text-gray-200': this.currentHighlight == 2}" @click="changeCurrentHighlight(2)">Movies</button>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getLastWatched"/>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">For You</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">Recently watched in Bogor</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">Joy our new Anime everyday</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
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
    currentHighlight: '1',
    listLastWatched: [
      {
        id: '1',
        img: 'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png',
        title: 'Kimi no Nawa',
        season: 'Spring 2018',
        type: '1'
      },
      {
        id: '2',
        img: 'https://upload.wikimedia.org/wikipedia/id/a/a8/HELLOWORLD.jpg',
        title: 'Hello World',
        season: 'Summer 2019',
        type: '1'
      },
      {
        id: '2',
        img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
        title: 'Tenki no Ko',
        season: 'Summer 2019',
        type: '1'
      },
      {
        id: '2',
        img: 'https://upload.wikimedia.org/wikipedia/id/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg',
        title: 'Kaguya-sama, Love is war',
        season: 'Summer 2019',
        type: '1'
      }
    ],
    listRecommendations: [
      {
        id: '',
        img: '',
        title: '',
        season: '',
        type: ''
      }
    ],
    listRecentlyWatchedRegion: [
      {
        id: '',
        img: '',
        title: '',
        season: '',
        type: ''
      }
    ],
    listRecentlyAdded: [
      {
        id: '',
        img: '',
        title: '',
        season: '',
        type: ''
      }
    ],
  }),
  components: {
    CardB,
    CardC
  },
  methods: {
      toggleNavbar(){
          this.isNavbarToggled = !this.isNavbarToggled
      },
      changeCurrentHighlight(highlight){
        this.currentHighlight = highlight
      }
  },
  computed: {
    getLastWatched(){
      return this.listLastWatched.filter(movie => {
        return movie.type == this.currentHighlight
      })
    }
  }
}
</script>