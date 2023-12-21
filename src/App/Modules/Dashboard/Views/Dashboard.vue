<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '../../../Common/Layouts/AdminLayout.vue';
import OrderSummary from '../Components/OrderSummary.vue';
import Map from '../Components/Map.vue';



</script>
<template>
    <AdminLayout>
        <div class="flex min-h-screen">
            <OrderSummary></OrderSummary>
            <Map></Map>
        </div>
    </AdminLayout>
</template>

