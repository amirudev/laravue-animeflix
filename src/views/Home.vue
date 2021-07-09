<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="bg-black md:flex text-gray-300">
    <left-navbar/>
    <div class="flex-grow p-5">
      <card-b :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi No Nawa'" :genres="'Fantasy, Comedy, Scenery'" :linkto="'Under Development'"/>
      <div class="text-gray-400 my-5">
        <router-link :to="{name: 'Under Development'}" class="font-bold mr-4">On Going</router-link>
        <router-link :to="{name: 'Under Development'}" class="font-bold mr-4 text-gray-200">Completed</router-link>
        <router-link :to="{name: 'Under Development'}" class="font-bold mr-4">Movies</router-link>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
        <card-c :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Kimi no Nawa'" :season="'Spring 2021'"/>
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
    </div>
    <right-navbar></right-navbar>
  </div>
</template>
<script>
import LeftNavbar from '../components/navbar/LeftNavbar.vue'
import RightNavbar from '../components/navbar/RightNavbar.vue'
import CardB from "../components/cards/Card-B.vue"
import CardC from "../components/cards/Card-C.vue"

export default {
  name: 'app',
  data: () => ({
      isNavbarToggled: false
  }),
  methods: {
      toggleNavbar(){
          this.isNavbarToggled = !this.isNavbarToggled
      }
  },
  components: {
    LeftNavbar,
    RightNavbar,
    CardB,
    CardC
  }
}
</script>