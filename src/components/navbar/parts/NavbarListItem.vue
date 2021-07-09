<template>
    <router-link :to="{name: this.linkto}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200" :class="{'text-gray-200': this.isActive}">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    name: 'navbar-list-item',
    props: ['linkto', 'isActive']
}
</script>