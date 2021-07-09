<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="bg-black md:flex text-gray-300">
    <left-navbar/>
    <div class="flex-grow p-5">
      <router-view/>
    </div>
    <right-navbar/>
  </div>
</template>
<script>
import LeftNavbar from './components/navbar/LeftNavbar.vue'
import RightNavbar from './components/navbar/RightNavbar.vue'

export default {
  components: {
    LeftNavbar,
    RightNavbar
  }
}
</script>
<style>
</style>
