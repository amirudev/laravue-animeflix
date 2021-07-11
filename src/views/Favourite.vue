<template>
    <div class="my-5">
        <h1 class="text-2xl font-bold">YOUR FAVOURITE</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-5">
        <card-e :img="this.dataMovieList[0].img" :title="this.dataMovieList[0].title" :season="this.dataMovieList[0].season" :linkto="'Under Development'"/>
        <card-e :img="this.dataMovieList[0].img" :title="this.dataMovieList[0].title" :season="this.dataMovieList[0].season" :linkto="'Under Development'"/>
        <card-e :img="this.dataMovieList[0].img" :title="this.dataMovieList[0].title" :season="this.dataMovieList[0].season" :linkto="'Under Development'"/>
        <card-e :img="this.dataMovieList[0].img" :title="this.dataMovieList[0].title" :season="this.dataMovieList[0].season" :linkto="'Under Development'"/>
        <card-e :img="this.dataMovieList[0].img" :title="this.dataMovieList[0].title" :season="this.dataMovieList[0].season" :linkto="'Under Development'"/>
    </div>
</template>
<script>
import CardE from "../components/cards/Card-E.vue"
import GenreEnum from "../enums/GenreEnum.js";

export default {
    name: 'favourite',
    data: () => ({
        currentGenre: '',
        airingStatus: 1,
        userSearch: '',
        genreEnum: GenreEnum
    }),
    props: ['dataMovieList', 'dataGenresList'],
    components: {
        CardE,
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
                    return movie.genres.includes(this.currentGenre) && movie.airingStatus == this.airingStatus && ( movie.title.toLowerCase().includes(this.userSearch.toLowerCase()) || movie.author.toLowerCase().includes(this.userSearch.toLowerCase()) )
                }
            })
        }
    }
}
</script>