<template>
    <div class="my-5">
        <h1 class="text-2xl font-bold">EVENTS </h1>
    </div>
    <div class="grid grid-cols-2">
        <event-card-b :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Yoasobi World Tour 2021 - Jakarta'" :location="'Jakarta, Indonesia'" :date="'20/01/2021 19.00'" :description="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis at eaque odit nemo atque ipsum error quidem amet architecto. Sit architecto libero cum neque quibusdam distinctio a eos voluptatibus!'" :link="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'"/>
        <event-card-b :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Yoasobi World Tour 2021 - Jakarta'" :location="'Jakarta, Indonesia'" :date="'20/01/2021 19.00'" :description="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis at eaque odit nemo atque ipsum error quidem amet architecto. Sit architecto libero cum neque quibusdam distinctio a eos voluptatibus!'" :link="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'"/>
        <event-card-b :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Yoasobi World Tour 2021 - Jakarta'" :location="'Jakarta, Indonesia'" :date="'20/01/2021 19.00'" :description="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis at eaque odit nemo atque ipsum error quidem amet architecto. Sit architecto libero cum neque quibusdam distinctio a eos voluptatibus!'" :link="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'"/>
        <event-card-b :img="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'" :title="'Yoasobi World Tour 2021 - Jakarta'" :location="'Jakarta, Indonesia'" :date="'20/01/2021 19.00'" :description="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis at eaque odit nemo atque ipsum error quidem amet architecto. Sit architecto libero cum neque quibusdam distinctio a eos voluptatibus!'" :link="'https://upload.wikimedia.org/wikipedia/id/0/0b/Your_Name_poster.png'"/>
    </div>
</template>
<script>
import EventCardB from "../components/cards/EventCard-B.vue";

export default {
    components: {
        EventCardB
    }
}
</script>