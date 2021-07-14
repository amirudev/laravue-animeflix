<template>
    <div class="flex justify-start">
        <img :src="this.img" alt="" class="w-32 object-contain">
        <div class="mx-4">
            <p class="font-bold text-md">{{ this.title }}</p>
            <p>{{ this.location }} - {{ this.date }}</p>
            <p>{{ this.description.slice(0, 100) }}</p>
            <div class="flex items-center my-3">
                <a class="bg-green-800 p-3 rounded text-center mr-1 flex-grow" href="#">Lihat Detail</a>
                <button class="bg-blue-800 p-3 rounded text-center" :href="this.link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'event-card-b',
    props: ['img', 'title', 'location', 'date', 'description', 'link']
}
</script>