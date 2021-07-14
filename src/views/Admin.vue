<template>
    <div class="my-4 text-gray-400">
        <router-link to="/admin" :class="{'text-gray-200': this.$route.path == '/admin'}">
            <span class="font-bold mx-2">Admin</span>
        </router-link>
        <router-link to="/admin/users" :class="{'text-gray-200': this.$route.path == '/admin/users'}">
            <span class="font-bold mx-2">Users</span>
        </router-link>
        <router-link to="/admin/movies" :class="{'text-gray-200': this.$route.path == '/admin/movies'}">
            <span class="font-bold mx-2">Movies</span>
        </router-link>
        <router-link to="/admin/sitesettings" :class="{'text-gray-200': this.$route.path == '/admin/sitesettings'}">
            <span class="font-bold mx-2">Site Settings</span>
        </router-link>
    </div>
    <div class="m-2">
        <router-view></router-view>
    </div>
    <div class="m-2">
        <div class="grid grid-cols-3">
            <div class="flex justify-start border border-green-800 rounded-lg p-4 mx-1">
                <div class="mx-3 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div>
                    <p>Pengguna Terdaftar</p>
                    <p class="font-bold text-2xl">10.000.000</p>
                </div>
            </div>
            <div class="flex justify-start border border-red-800 rounded-lg p-4 mx-1">
                <div class="mx-3 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div>
                    <p>Jumlah Film</p>
                    <p class="font-bold text-2xl">10.000.000</p>
                </div>
            </div>
            <div class="flex justify-start border border-blue-800 rounded-lg p-4 mx-1">
                <div class="mx-3 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div>
                    <p>Penghasilan bulan ini</p>
                    <p class="font-bold text-2xl">Rp10.000.000</p>
                </div>
            </div>
        </div>
        <canvas id="users-new-chart" class="w-full my-5 h-64"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

var newUsersChart = {
    type: 'line',
    data: {
        labels: ['08/2020', '09/2020', '10/2020', '11/2020', '12/2020', '01/2021', '02/2021', '03/2021', '04/2021', '05/2021', '06/2021', '07/2020'],
        datasets: [{
            label: 'New Users',
            data: [10, 20, 30, 40, 20, 30, 40, 50, 60, 70, 50, 80],
            backgroundColor: '#E5E7EB',
            borderColor: '#E5E7EB',
            borderWidth: 1,
            pointHitRadius: 100,
            pointRadius: 3
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}

export default {
    name: 'admin',
    data(){
        return {
            newUsersChart: newUsersChart
        }
    },
    mounted(){
        new Chart(document.getElementById('users-new-chart'), this.newUsersChart)
    }
}
</script>