<script setup>
import { ref } from "vue";

import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";


const zoom = ref(2);


</script>


<template>
     <div class="w-full  h-96">
        <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :useGlobalLeaflet="false">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </l-tile-layer>
        </l-map>
    </div> 


</template>


<style  scoped></style>