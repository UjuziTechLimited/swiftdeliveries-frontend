<script setup>
import { ref } from 'vue';
import AssignedOrders from '../Components/AssignedOrders.vue';
import NewOrders from '../Components/NewOrders.vue';
const activeTab = ref('assigned');
</script>

<template>
    <section class="">
        <div class="">
            <div class="mt-4">
                <ul class="flex flex-row justify-between px-4 py-2">
                    <li class="w-full p-2 m-2 text-center border-r-4 border-info">
                        <a href="#" class="w-full p-2 m-2 text-base font-bold hover:bg-primary rounded-xl "
                            :class="{ 'active': activeTab === 'assigned' }" @click.prevent="activeTab = 'assigned'">
                            Assigned Orders
                        </a>
                    </li>

                    <li class="w-full p-2 m-2 text-center">
                        <a href="#" class="w-full p-2 m-2 text-base font-bold hover:bg-primary rounded-xl"
                            :class="{ 'active': activeTab === 'new' }" @click.prevent="activeTab = 'new'">
                            New Orders
                        </a>
                    </li>
                </ul>
                <div v-if="activeTab === 'assigned'" class="p-2 m-2">
                    <AssignedOrders></AssignedOrders>
                </div>

                <div v-if="activeTab === 'new'" class="p-2 m-2">
                    <NewOrders></NewOrders>
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