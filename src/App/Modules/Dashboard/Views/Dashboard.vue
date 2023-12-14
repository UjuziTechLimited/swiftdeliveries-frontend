
<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '../../../Common/Layouts/MainLayout.vue';


const mapVisible = ref(true);
const activeTab = ref('assigned');

const toggleMap = () => {
    mapVisible.value = !mapVisible.value;
};
</script>


<template>
    <MainLayout>

        <div>
            <div id="app">
                <div class="flex flex-row items-center justify-between mb-4">
                    <h2 class="text-xl font-bold">Map View</h2>
                    <button @click="toggleMap">
                        <span v-if="!mapVisible">Show Map</span>
                        <span v-else>Hide Map</span>
                    </button>
                </div>

                <div v-if="mapVisible" class="overflow-hidden border rounded h-96">

                </div>

                <div class="mt-4">
                    <ul class="flex flex-row justify-between px-4 py-2 border-b rounded-t-lg">
                        <li class="mr-4">
                            <a href="#" :class="{ 'active': activeTab === 'assigned' }"
                                @click.prevent="activeTab = 'assigned'">
                                Assigned Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" :class="{ 'active': activeTab === 'new' }" @click.prevent="activeTab = 'new'">
                                New Orders
                            </a>
                        </li>
                    </ul>

                    <div v-if="activeTab === 'assigned'">
                    </div>

                    <div v-if="activeTab === 'new'">
                    </div>
                </div>
            </div>

        </div>

    </MainLayout>
</template>

