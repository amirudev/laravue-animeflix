<template>
    <router-link :to="{name: this.linkto}" class="inline-flex w-full align-middle py-2 hover:text-gray-200" :class="{'text-gray-200': this.isActive}">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    name: 'navbar-list-item',
    props: ['linkto', 'isActive']
}
</script>