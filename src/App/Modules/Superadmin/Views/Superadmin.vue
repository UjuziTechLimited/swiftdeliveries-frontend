<!-- src/App/Modules/Orders/Views/Orders.vue -->

<script setup>
import { ref } from 'vue';
import SuperadminLayout from '@/App/Common/Layouts/SuperadminLayout.vue';
import Dashboard from '../Components/Dashboard.vue';

</script>

<template>
    <SuperadminLayout>
        <div class="my-4 text-2xl text-center font-headings">Super Administrator</div>
        <div class="mx-auto ">
            <Dashboard />
        </div>
    </SuperadminLayout>
</template>