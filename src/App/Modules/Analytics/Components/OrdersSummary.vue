<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{ data: [49, 24, 12, 8, 19, 80, 33, 66, 51, 27, 39, 16] }],

})
const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'left',


        },

    }

})

</script>

<template>
    <div>
        <div class="my-4 text-2xl text-center font-headings">Number of Orders</div>
    </div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

