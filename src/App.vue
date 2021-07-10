<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="bg-black md:flex text-gray-300">
    <left-navbar/>
    <div class="flex-grow p-5">
      <router-view :data="movieDataList" :dataGenresList="genresList"/>
    </div>
    <right-navbar :movie="movieDataList.listLastWatched[0]" :events="eventDataList.lastEvents"/>
  </div>
</template>
<script>
import LeftNavbar from './components/navbar/LeftNavbar.vue'
import RightNavbar from './components/navbar/RightNavbar.vue'

export default {
  data: () => ({
    movieDataList: {
      listLastWatched: [
        {
          id: '1',
          img: 'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png',
          title: 'Kimi no Nawa',
          season: 'Spring 2018',
          genres: ['', 'ACT', 'JOS'],
          airingStatus: '1'
        },
        {
          id: '2',
          img: 'https://upload.wikimedia.org/wikipedia/id/a/a8/HELLOWORLD.jpg',
          title: 'Hello World',
          season: 'Summer 2019',
          genres: ['', 'ACT', 'JOS'],
          airingStatus: '1'
        },
        {
          id: '2',
          img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
          title: 'Tenki no Ko',
          season: 'Summer 2019',
          genres: ['', 'ACT', 'JOS'],
          airingStatus: '1'
        },
        {
          id: '2',
          img: 'https://upload.wikimedia.org/wikipedia/id/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg',
          title: 'Kaguya-sama, Love is war',
          season: 'Summer 2019',
          genres: ['', 'ACT', 'JOS'],
          airingStatus: '1'
        }
      ],
      listRecommendations: [
        {
          id: '2',
          img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
          title: 'Hello World',
          season: 'Summer 2019',
          genres: ['', 'ACT', 'JOS'],
          airingStatus: '1'
        },
        {
          id: '2',
          img: 'https://upload.wikimedia.org/wikipedia/id/6/66/Weathering_with_You_Poster.jpg',
          title: 'Hello World',
          season: 'Summer 2019',
          genres: ['', 'ACT'],
          airingStatus: '1'
        }
      ],
      listRecentlyWatchedByRegion: [
        {
          id: '',
          img: '',
          title: '',
          season: '',
          airingStatus: ''
        }
      ],
      listMovies: [
        {
          id: '',
          img: '',
          title: '',
          season: '',
          airingStatus: ''
        }
      ],
    },
    eventDataList: {
      lastEvents: [
        {
          id: '1',
          title: 'Sangenshoku - Yoasobi MV Release',
          location: 'Tokyo, Japan',
          datetime: '12/02/21 10.00'
        }
      ],
      allEvents: [
        {
          id: '1',
          title: '',
          location: '',
          datetime: ''
        }
      ]
    },
    genresList: [
      'ACT',
      'ADV',
      'CAR',
      'COM',
      'DEM',
      'DEO',
      'DRA',
      'HAR',
      'HIS',
      'HOR',
      'JOS',
      'KID',
      'MAG',
      'MAA',
      'MEC',
      'MIL',
      'MUS',
      'MYS',
      'PAR',
      'POL',
      'PSY',
      'ROM',
      'SAM',
      'SCH',
      'SCI',
      'SEI',
      'SHJ',
      'SHN',
      'SOL',
      'SPC',
      'SPO',
      'SPN',
      'SPP',
      'THR',
      'VAM',
    ]
  }),
  components: {
    LeftNavbar,
    RightNavbar
  }
}
</script>
<style>
</style>
