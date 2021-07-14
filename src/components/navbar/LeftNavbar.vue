<template>
    <div class="flex-none w-full md:w-64 p-5 md:relative fixed z-50 bg-black">
      <div class="md:fixed md:w-60">
        <div class="flex justify-between">
          <img src="../../assets/images/website-logo.png" alt="Website Logo" style="max-width:150px">
          <button class="md:hidden" id="button-togglenavbar" v-on:click="toggleNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="md:inline-block text-gray-400" :class="{hidden: !isNavbarToggled}">
          <div class="mt-4">
            <h1 class="text-gray-300 font-bold py-4">MENU</h1>
            <navbar-list-item :linkto="'home'" :isActive="this.$route.name == 'home'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="mx-3">Home</span>
            </navbar-list-item>
            <navbar-list-item :linkto="'season'" :isActive="this.$route.name == 'season'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span class="mx-3">Season</span>
            </navbar-list-item>
            <navbar-list-item :linkto="'discovery'" :isActive="this.$route.name == 'discovery'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span class="mx-3">Discovery</span>
            </navbar-list-item>
            <navbar-list-item :linkto="'ranking'" :isActive="this.$route.name == 'ranking'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span class="mx-3">Ranking</span>
            </navbar-list-item>
            <navbar-list-item :linkto="'events'" :isActive="this.$route.name == 'events'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="mx-3">Events</span>
            </navbar-list-item>
          </div>
          <div class="mt-4">
            <h1 class="text-gray-300 font-bold py-4">GENERAL</h1>
            <navbar-list-item :linkto="'admin'" :isActive="this.$route.name == 'admin'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="mx-3">Admin</span>
            </navbar-list-item>
            <navbar-list-item :linkto="'Under Development'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="mx-3">Log Out</span>
            </navbar-list-item>
          </div>
          <!-- {{ this.$route.name }} -->
        </div>
      </div>
    </div>
</template>
<script>
import NavbarListItem from './parts/NavbarListItem'

export default {
  name: 'left-navbar',
  components: {
    NavbarListItem
  },
}
  
</script>