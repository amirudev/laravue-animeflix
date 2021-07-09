<template>
    <div class="flex-none md:w-72 p-5">
      <div class="md:fixed">
        <div class="grid justify-items-end">
          <input type="text" class="bg-gray-800 text-gray-300 rounded-full px-4 py-2 text-s focus:outline-none" placeholder="Kimi no Nawa">
        </div>
        <h1 class="text-gray-200 font-bold py-3">Recently Watched</h1>
        <!-- <div class="" style="background-image: url('../assets/images/anime-1.png');">
          <h1>Kimi no Nawa</h1>
        </div> -->
        <card-a :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'">Kimi nawa</card-a>
        <h1 class="text-gray-200 font-bold py-3">Next Events</h1>
        <event-card :date="16" :title="'Kimi no Nawa release'" :detailsDate="'16 Januari - 10.00'" :location="'Jakarta, Indonesia'"/>
        <event-card :date="16" :title="'Kimi no Nawa release'" :detailsDate="'16 Januari - 10.00'" :location="'Jakarta, Indonesia'"/>
        <event-card :date="16" :title="'Kimi no Nawa release'" :detailsDate="'16 Januari - 10.00'" :location="'Jakarta, Indonesia'"/>
      </div>
    </div>
</template>
<script>
import CardA from "../cards/Card-A.vue"
import EventCard from "../cards/EventCard.vue"

export default {
  name: 'right-navbar',
  components: {
    'card-a': CardA,
    'event-card': EventCard
  }
}
</script>