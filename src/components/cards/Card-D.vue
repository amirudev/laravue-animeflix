<template>
    <div class="mb-3 grid grid-cols-4">
        <div class="relative">
            <img :src="this.img" :alt="this.title" class="max-w-full w-full object-cover object-top rounded-lg h-64">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
                <p class="font-bold text-gray-100 text-md">{{ this.title }}</p>
                <p class="text-right">{{ this.season }}</p>
            </div>
        </div>
        <div class="mx-4 col-span-3">
            <div class="mb-2">
                <p class="font-bold text-xl">Ashita Tenki ni Naare Omake</p>
            </div>
            <div class="mb-2">
                <p>Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hoda...</p>
            </div>
            <div class="mb-2">
                <p>Score : 8.43</p>
                <p>Rate : PG 13+</p>
                <p>Episodes : 24</p>
            </div>
            <div class="flex justify-end">
                <router-link :to="{name: this.linkto}" class="inline-flex align-middle bg-red-800 px-6 py-2 rounded-md mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="mx-1 font-bold">Watch Now</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card-c',
    props: ['img', 'title', 'season']
}
</script>