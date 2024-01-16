<script setup>
import { onMounted } from 'vue'
import { LayoutDashboard, Truck, Bike, BarChart3, Inbox } from 'lucide-vue-next'
import AdminFooter from '@/App/Common/Components/AdminFooter.vue'
import ThemeChange from '../Components/ThemeChange.vue';
import Logout from '../Components/Logout.vue';

import { themeChange } from 'theme-change';

onMounted(() => {
    themeChange(false);
});

</script>


<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <!--  -->
        <div class="flex flex-col drawer-content">
            <div class="flex justify-between p-2 m-2 lg:justify-end">
                <label for="my-drawer-2" class="btn btn-sm drawer-button lg:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7">
                        </path>
                    </svg>
                </label>


                <div class="flex">
                   <ThemeChange />
                    <Logout />
                </div>
            </div>
            <slot></slot>

        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
                <div class="flex my-4">
                    <img src="@/assets/images/logo.png" alt="ujuzitech logo" class="w-12 h-12">
                    <RouterLink :to="{ name: 'Homepage' }"
                        class="p-2 lowercase xs:text-md md:text-lg xl:text-2xl font-ArtStyle">
                        SwiftDeliveries
                    </RouterLink>
                </div>
                <!-- Sidebar content here -->
                <li>
                    <RouterLink :to="{ name: 'Dashboard' }" class="text-2xl font-bold font-headings">
                        <LayoutDashboard />
                        Dashboard
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Orders' }" class="text-2xl font-bold font-headings">
                        <Truck />
                        Orders
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Riders' }" class="text-2xl font-bold font-headings">
                        <Bike />
                        Riders
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Analytics' }" class="text-2xl font-bold font-headings">
                        <BarChart3 />
                        Analytics
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Messages' }" class="text-2xl font-bold font-headings">
                        <Inbox />
                        Messages
                    </RouterLink>
                </li>
            </ul>

        </div>

    </div>

    <AdminFooter />
</template>


<style scoped></style>