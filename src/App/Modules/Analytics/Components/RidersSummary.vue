<script setup>
import { ref } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../Config/chartConfig'

ChartJS.register(ArcElement, Tooltip, Legend)


</script>

<template>
    <div></div>
    <Doughnut :data="chartConfig.data" :options="chartConfig.options" />
</template>

@/App/Modules/Analytics/config/chartConfig.js../Config/chartConfig.js