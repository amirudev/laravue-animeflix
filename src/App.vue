<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="bg-black md:flex text-gray-300">
    <left-navbar/>
    <div class="flex-grow pt-16 p-5 md:pt-5">
      <router-view :dataMovieList="movieDataList" :dataGenresList="genresList"/>
    </div>
    <right-navbar :movie="movieDataList" :events="eventDataList"/>
  </div>
</template>
<script>
import LeftNavbar from './components/navbar/LeftNavbar.vue'
import RightNavbar from './components/navbar/RightNavbar.vue'

export default {
  data: () => ({
    movieDataList: [
      {
        id: '1',
        img: 'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png',
        title: 'Kimi no Nawa',
        season: 'Spring 2018',
        author: 'Takumi Kitamura',
        genres: ['', 'ACT'],
        airingStatus: 1,
        listType: ['LW', 'RC', 'RW']
      },
      {
        id: '2',
        img: 'https://upload.wikimedia.org/wikipedia/id/a/a8/HELLOWORLD.jpg',
        title: 'Hello World',
        season: 'Summer 2019',
        author: 'Takumi Kitamura',
        genres: ['', 'ADV'],
        airingStatus: 2,
        listType: ['LW', 'RC']
      },
      // listLastWatched: [
      //   {
      //     id: '1',
      //     img: 'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png',
      //     title: 'Kimi no Nawa',
      //     season: 'Spring 2018',
      //     genres: ['', 'ACT'],
      //     airingStatus: '1'
      //   },
      //   {
      //     id: '2',
      //     img: 'https://upload.wikimedia.org/wikipedia/id/a/a8/HELLOWORLD.jpg',
      //     title: 'Hello World',
      //     season: 'Summer 2019',
      //     genres: ['', 'ADV'],
      //     airingStatus: '1'
      //   },
      //   {
      //     id: '2',
      //     img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
      //     title: 'Tenki no Ko',
      //     season: 'Summer 2019',
      //     genres: ['', 'CAR'],
      //     airingStatus: '1'
      //   },
      //   {
      //     id: '2',
      //     img: 'https://upload.wikimedia.org/wikipedia/id/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg',
      //     title: 'Kaguya-sama, Love is war',
      //     season: 'Summer 2019',
      //     genres: ['', 'COM'],
      //     airingStatus: '1'
      //   }
      // ],
      // listRecommendations: [
      //   {
      //     id: '2',
      //     img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
      //     title: 'Hello World',
      //     season: 'Summer 2019',
      //     genres: ['', 'ACT'],
      //     airingStatus: '1'
      //   },
      //   {
      //     id: '2',
      //     img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
      //     title: 'Hello World',
      //     season: 'Summer 2019',
      //     genres: ['', 'ACT'],
      //     airingStatus: '1'
      //   }
      // ],
      // listRecentlyWatchedByRegion: [
      //   {
      //     id: '',
      //     img: '',
      //     title: '',
      //     season: '',
      //     airingStatus: ''
      //   }
      // ],
      // listMovies: [
      //   {
      //     id: '',
      //     img: '',
      //     title: '',
      //     season: '',
      //     airingStatus: ''
      //   }
      // ],
    ],
    eventDataList: [
      {
        id: '1',
        title: 'Sangenshoku - Yoasobi MV Release',
        location: 'Tokyo, Japan',
        datetime: '12/02/21 10.00'
      }
    ],
  }),
  components: {
    LeftNavbar,
    RightNavbar
  }
}
</script>
<style>
</style>
