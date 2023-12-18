<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '../../../Common/Layouts/AdminLayout.vue';
import OrderSummary from '../Components/OrderSummary.vue';



</script>
<template>
    <AdminLayout>
        <div class="min-h-screen">
            <OrderSummary></OrderSummary>
        </div>
    </AdminLayout>
</template>

