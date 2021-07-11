<template>
<div class="my-5">
    <h1 class="text-2xl font-bold">DISCOVERY</h1>
</div>
<input type="text" name="" id="" class="bg-gray-800 text-gray-300 rounded-full px-4 py-3 text-md focus:outline-none w-full" v-model="this.userSearch">
<div class="text-gray-400 my-5">
    <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 0}" @click="changeAiringStatus(0)">On Going</button>
    <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 1}" @click="changeAiringStatus(1)">Completed</button>
    <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 2}" @click="changeAiringStatus(2)">Movies</button>
</div>
<div class="text-gray-400 my-5">
    <button class="font-bold mr-4 mb-3" :class="{'text-gray-200': this.currentGenre == ''}" @click="changeCurrentGenre('')">All</button>
    <button class="font-bold mr-4 mb-3" :class="{'text-gray-200': this.currentGenre == genre}" @click="changeCurrentGenre(genre)" v-for="genre in Object.keys(this.genreEnum)" :key="genre">{{ this.genreEnum[genre] }}</button>
</div>
<div class="my-5">
    <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getRecommendations"/>
    </div>
</div>
</template>
<script>
// import CardB from "../components/cards/Card-B.vue"
import CardC from "../components/cards/Card-C.vue"
import GenreEnum from "../enums/GenreEnum.js";

export default {
    name: 'discovery',
    data: () => ({
        currentGenre: '',
        airingStatus: 1,
        userSearch: '',
        genreEnum: GenreEnum
    }),
    props: ['dataMovieList', 'dataGenresList'],
    components: {
        // CardB,
        CardC,
    },
    methods: {
        changeCurrentGenre(genre){
            this.currentGenre = genre
        },
        changeAiringStatus(status){
            this.airingStatus = status
        }
    },
    computed: {
        getRecommendations(){
            return this.dataMovieList.filter(movie => {
                if(movie.listType.includes('RC')){
                    return movie.genres.includes(this.currentGenre) && movie.airingStatus == this.airingStatus && movie.title.toLowerCase().includes(this.userSearch)
                }
            })
        }
    }
}
</script>