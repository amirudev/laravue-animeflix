<template>
    <p class="font-bold text-xl">Laporan Keuangan</p>
    <div class="overflow-x-auto">
        <table class="table-auto w-full border border-gray-500 text-center my-5">
            <thead class="bg-gray-800 border border-gray-500">
                <tr>
                    <th class="py-3">ID</th>
                    <th class="py-3">Nominal</th>
                    <th class="py-3">Catatan</th>
                    <th class="py-3">Jenis</th>
                    <th class="py-3">Added At</th>
                    <th class="py-3">Added By</th>
                    <th class="py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-900">
                    <td class="p-3">1</td>
                    <td class="p-3">Rp10.000</td>
                    <td class="p-3">Pendapatan iklan shortlink</td>
                    <td class="p-3">Pemasukan</td>
                    <td class="p-3">2021/08/20 19:59</td>
                    <td class="p-3">Wahyu Amirulloh</td>
                    <td class="">
                        <a class="text-red-500 font-bold px-3" href="#">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <canvas id="cashflow-chart" class="w-full my-5 h-64"></canvas>
</template>
<script>
import Chart from 'chart.js/auto';

var cashflowChart = {
    type: 'line',
    data: {
        labels: ['08/2020', '09/2020', '10/2020', '11/2020', '12/2020', '01/2021', '02/2021', '03/2021', '04/2021', '05/2021', '06/2021', '07/2020'],
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [20, 30, 40, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
        }, {
            type: 'bar',
            label: 'Bar Dataset',
            data: [40, 10, 10, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 40, 50, 30],
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderColor: '#E5E7EB',
            pointHitRadius: 30,
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
    name: 'admin-report',
    data(){
        return {
            cashflowChart: cashflowChart
        }
    },
    mounted(){
        new Chart(document.getElementById('cashflow-chart'), this.cashflowChart)
    }
}
</script>