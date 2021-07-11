<template>
    <card-b :img="getRecommendations[0].img" :title="getRecommendations[0].title" :season="getRecommendations[0].season" :linkto="'Under Development'" v-if="getRecommendations.length >= 1"/>
    <div class="text-gray-400 my-5">
        <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 0}" @click="changeAiringStatus(0)">On Going</button>
        <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 1}" @click="changeAiringStatus(1)">Completed</button>
        <button class="font-bold mr-4" :class="{'text-gray-200': this.airingStatus == 2}" @click="changeAiringStatus(2)">Movies</button>
    </div>
    <div class="text-gray-400 my-5">
        <button class="font-bold mr-4 mb-3" :class="{'text-gray-200': this.currentGenre == ''}" @click="changeCurrentGenre('')">All</button>
        <button class="font-bold mr-4 mb-3" :class="{'text-gray-200': this.currentGenre == genre}" @click="changeCurrentGenre(genre)" v-for="genre in Object.keys(this.genreEnum)" :key="genre">{{ this.genreEnum[genre] }}</button>
    </div>
    <div class="my-4">
        <div class="my-4">
            <span class="font-bold text-xl">🔥 Getting Popular</span>
        </div>
        <div class="w-full grid grid-cols-2 lg:grid-cols-4">
            <card-c :img="movie.img" :title="movie.title" :season="movie.season" :key="movie.id" v-for="movie in getRecommendations"/>
        </div>
        <div class="my-4">
            <span class="font-bold text-xl">✨ For you</span>
        </div>
        <div class="my-4">
            <span class="font-bold text-xl">🍿 Animes</span>
        </div>
    </div>
</template>
<script>
import CardB from "../components/cards/Card-B.vue"
import CardC from "../components/cards/Card-C.vue"
import GenreEnum from "../enums/GenreEnum.js"

export default {
    name: 'season',
    data: () => ({
        currentGenre: '',
        airingStatus: 1,
        genreEnum: GenreEnum
    }),
    props: ['dataMovieList', 'dataGenresList'],
    components: {
        CardB,
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
                    return movie.genres.includes(this.currentGenre) && movie.airingStatus == this.airingStatus
                }
            })
        }
    }
}
</script>