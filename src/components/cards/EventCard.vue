<template>
    <div class="flex mb-2">
        <div class="bg-green-700 flex-none w-14 h-14 text-center rounded-lg table flex-none my-auto">
        <div class="table-cell align-middle font-bold text-lg">
            {{ this.date }}
        </div>
        </div>
        <div class="flex-grow mx-2">
        <p class="font-bold">{{ this.title }}</p>
        <p>{{ this.detailsDate }}</p>
        <p>{{ this.location }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'event-card',
    props: ['date', 'title', 'detailsDate', 'location']
}
</script>