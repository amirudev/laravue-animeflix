<template>
    <div class="flex justify-start mt-4">
        <p class="my-auto font-bold text-xl mx-2">{{ this.index }}.</p>
        <img :src="this.img" :alt="this.title" class="rounded h-14 w-14 mx-2 object-cover">
        <div class="mx-2">
            <p class="font-bold text-md">{{ this.title }}</p>
            <p class="text-md">Views: {{ this.views }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card-f',
    props: ['index', 'title', 'views', 'img']
}
</script>