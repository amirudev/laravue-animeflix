<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="bg-black md:flex text-gray-300">
    <div class="flex-none w-full md:w-64 p-5 md:relative fixed z-50 bg-black">
      <div class="md:fixed">
        <div class="flex justify-between">
          <img src="../assets/images/website-logo.png" alt="Website Logo" style="max-width:150px">
          <button class="md:hidden" id="button-togglenavbar" v-on:click="toggleNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="md:inline-block" :class="{hidden: !isNavbarToggled}">
          <div class="mt-4">
            <h1 class="text-gray-300 font-bold py-4">MENU</h1>
            <router-link :to="{name: 'Under Development'}" class="text-gray-200 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="mx-3">Home</span>
            </router-link>
            <router-link :to="{name: 'Under Development'}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span class="mx-3">Seasons</span>
            </router-link>
            <router-link :to="{name: 'Under Development'}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span class="mx-3">Discovery</span>
            </router-link>
            <router-link :to="{name: 'Under Development'}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span class="mx-3">Favourites</span>
            </router-link>
          </div>
          <div class="mt-4">
            <h1 class="text-gray-300 font-bold py-4">SOCIAL</h1>
            <router-link :to="{name: 'Under Development'}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span class="mx-3">Friends</span>
            </router-link>
          </div>
          <div class="mt-4">
            <h1 class="text-gray-300 font-bold py-4">GENERAL</h1>
            <router-link :to="{name: 'Under Development'}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"  hover:font-bold/>
              </svg>
              <span class="mx-3">Settings</span>
            </router-link>
            <router-link :to="{name: 'Under Development'}" class="text-gray-400 inline-flex align-middle py-2 w-full hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="mx-3">Log Out</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow p-5">
      <div class="relative">
        <img src="../assets/images/anime-1.png" alt="Anime 1" class="h-80 w-full object-cover object-top rounded-lg">
        <div class="absolute bottom-0 left-0 p-5 w-full bg-gradient-to-r from-black">
          <div class="w-full md:w-1/2">
            <p class="font-bold text-gray-100 text-4xl">KIMI NO NAWA</p>
            <p class="font-bold text-gray-200">Fantasy, Action, Comedy, Slice of Life</p>
            <router-link :to="{name: 'Under Development'}" class="inline-flex align-middle bg-red-800 px-6 py-2 rounded-md mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="mx-1 font-bold">Watch Now</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="text-gray-400 my-5">
        <router-link :to="{name: 'Under Development'}" class="font-bold mr-4">On Going</router-link>
        <router-link :to="{name: 'Under Development'}" class="font-bold mr-4 text-gray-200">Completed</router-link>
        <router-link :to="{name: 'Under Development'}" class="font-bold mr-4">Movies</router-link>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
              <p class="text-right">Spring 2021</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">For You</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">Recently watched in Bogor</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4">
        <span class="font-bold text-xl">Joy our new Anime everyday</span>
      </div>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4">
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-1 mx-auto">
          <div class="relative">
            <img src="../assets/images/anime-1.png" alt="Anime 1" class="max-w-full w-full object-cover object-top rounded-lg">
            <div class="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-r from-black">
              <p class="font-bold text-gray-100 text-md">KIMI NO NAWA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-none md:w-72 p-5">
      <div class="md:fixed">
        <div class="grid justify-items-end">
          <input type="text" class="bg-gray-800 text-gray-300 rounded-full px-4 py-2 text-s focus:outline-none" placeholder="Kimi no Nawa">
        </div>
        <h1 class="text-gray-200 font-bold py-3">Recently Watched</h1>
        <!-- <div class="" style="background-image: url('../assets/images/anime-1.png');">
          <h1>Kimi no Nawa</h1>
        </div> -->
        <div class="relative">
          <img src="../assets/images/anime-1.png" alt="Anime 1" class="h-36 w-full object-cover object-top rounded-lg">
          <div class="absolute bottom-0 text-gray-200 rounded-lg w-full bg-gradient-to-t from-black">
            <br>
            <br>
            <div class="flex mx-3">
              <h3 class="font-bold mb-2 flex-grow">Kimi No Nawa</h3>
              <span class="text-xs flex-none w-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <h1 class="text-gray-200 font-bold py-3">Next Events</h1>
        <div class="flex mb-2">
          <div class="bg-green-700 flex-none w-14 h-14 text-center rounded-lg table flex-none my-auto">
            <div class="table-cell align-middle font-bold text-lg">
              16
            </div>
          </div>
          <div class="flex-grow mx-2">
            <p class="font-bold">Kimi no nawa Release</p>
            <p>16 January - 10.00</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <div class="flex mb-2">
          <div class="bg-green-700 flex-none w-14 h-14 text-center rounded-lg table flex-none my-auto">
            <div class="table-cell align-middle font-bold text-lg">
              16
            </div>
          </div>
          <div class="flex-grow mx-2">
            <p class="font-bold">Kimi no nawa Release</p>
            <p>16 January - 10.00</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <div class="flex mb-2">
          <div class="bg-green-700 flex-none w-14 h-14 text-center rounded-lg table flex-none my-auto">
            <div class="table-cell align-middle font-bold text-lg">
              16
            </div>
          </div>
          <div class="flex-grow mx-2">
            <p class="font-bold">Kimi no nawa Release</p>
            <p>16 January - 10.00</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
      isNavbarToggled: false
  }),
  methods: {
      toggleNavbar(){
          this.isNavbarToggled = !this.isNavbarToggled
      }
  }
}
</script>