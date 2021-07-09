<template>
    <div class="w-11/12 m-1 mx-auto">
        <div class="relative">
        <img :src="this.img" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
        <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
            <p class="font-bold text-gray-100 text-md">{{ this.title }}</p>
            <p class="text-right">{{ this.season }}</p>
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