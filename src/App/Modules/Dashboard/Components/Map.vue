<script setup>
import { Map, MapStyle, config } from '@maptiler/sdk';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
    config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

    const initialState = { lng: 36.8189302, lat: -1.2731758, zoom: 10 };
    map.value = markRaw(new Map({
        container: mapContainer.value,
        style: MapStyle.STREETS,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
    }));

}),
    onUnmounted(() => {
        map.value?.remove();
    })
</script>


<template>
    <div class="relative w-full">
        <div class="absolute w-full h-full" ref="mapContainer"></div>
    </div>
</template>



<style scoped>
.map-wrap {
    position: relative;
    width: 100%;
    height: calc(100vh - 200px);
    /* calculate height of the screen minus the heading */
}

.map {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>