<script setup>
import { ref } from 'vue';
import OrdersSummary from './OrdersSummary.vue';
import RidersSummary from './RidersSummary.vue';
const activeTab = ref('assigned');
</script>

<template>
    <section class="container mx-auto">
        <div class="">
            <div class="mt-4">
                <ul class="flex flex-row justify-between px-4 py-2">
                    <li class="w-full p-2 m-2 text-center border-r-4 border-info">
                        <a href="#" class="w-full p-2 m-2 text-base font-bold hover:bg-primary rounded-xl "
                            :class="{ 'active': activeTab === 'assigned' }" @click.prevent="activeTab = 'assigned'">
                            Orders Summary
                        </a>
                    </li>

                    <li class="w-full p-2 m-2 text-center">
                        <a href="#" class="w-full p-2 m-2 text-base font-bold hover:bg-primary rounded-xl"
                            :class="{ 'active': activeTab === 'new' }" @click.prevent="activeTab = 'new'">
                            Rider Performance
                        </a>
                    </li>
                </ul>
                <div v-if="activeTab === 'assigned'" class="p-2 m-2">
                    <OrdersSummary></OrdersSummary>
                </div>

                <div v-if="activeTab === 'new'" class="p-2 m-2">
                    <RidersSummary></RidersSummary>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.active {
    @apply font-extrabold border-b-2 border-primary;
}
</style>