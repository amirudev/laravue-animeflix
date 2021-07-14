<template>
    <div class="flex-none md:w-72 p-5">
      <div class="md:fixed mr-3">
        <div class="grid justify-items-end">
          <input type="text" class="bg-gray-800 text-gray-300 rounded-full px-4 py-2 text-s focus:outline-none" placeholder="Kimi no Nawa">
        </div>
        <h1 class="text-gray-200 font-bold py-3">Recently Watched</h1>
        <!-- <div class="" style="background-image: url('../assets/images/anime-1.png');">
          <h1>Kimi no Nawa</h1>
        </div> -->
        <card-a :img="this.movie.img">{{ this.movie.title }}</card-a>
        <h1 class="text-gray-200 font-bold py-3">Next Events</h1>
        <event-card :date="16" :title="event.title" :detailsDate="event.datetime" :location="event.location" v-for="event in this.events" :key="event.id"/>
      </div>
    </div>
</template>
<script>
import CardA from "../cards/Card-A.vue"
import EventCard from "../cards/EventCard.vue"

export default {
  name: 'right-navbar',
  props: ['movie', 'events'],
  components: {
    'card-a': CardA,
    'event-card': EventCard
  }
}
</script>