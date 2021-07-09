<template>
    <div class="relative">
        <img :src="this.img" alt="Anime 1" class="h-36 w-full object-cover object-top rounded-lg">
        <div class="absolute bottom-0 text-gray-200 rounded-lg w-full bg-gradient-to-t from-black">
        <br>
        <br>
        <div class="flex mx-3">
            <h3 class="font-bold mb-2 flex-grow"><slot/></h3>
            <span class="text-xs flex-none w-4">
            <svg v-if="!this.isLiked" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            </span>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card-a',
    props: ['img', 'isLiked']
}
</script>