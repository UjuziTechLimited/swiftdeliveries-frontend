<script setup>
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';


const props = defineProps(['searchQuery']);
const emit = defineEmits(['selectLocation']);



const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
    config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

    // const initialState = { lng: 36.8189302, lat: -1.2731758, zoom: 10 };

    map.value = markRaw(new Map({
        container: mapContainer.value,
        style: MapStyle.STREETS.DARK,
        geolocate: maptilersdk.GeolocationType.POINT, // center map based on visitor’s location
        // center: [initialState.lng, initialState.lat],
        // zoom: initialState.zoom
    }));

    new Marker({ color: "#FF0000" })
        .setLngLat([36.8189302, -1.2731758])
        .addTo(map.value);

    //set geocoding control prioritize results near Time Square in New York
    const gc = new maptilersdkMaptilerGeocoder.GeocodingControl({
        proximity: [40.756140, -73.986644]
    });
    map.addControl(gc, 'top-left');


    // Add an event listener to listen for map click events
    map.value.on('click', handleMapClick);


    const handleMapClick = (event) => {
        // Handle map click event, e.g., add a marker or perform geocoding
        const lngLat = event.lngLat.toArray();
        console.log('Clicked on:', lngLat);

        // Perform reverse geocoding to get location details
        maptilersdk.reverseGeocode()
            .setLngLat(lngLat)
            .send()
            .then((response) => {
                console.log('Reverse geocoding response:', response);
                // Handle the response, e.g., show location details to the user
            })
            .catch((error) => {
                console.error('Reverse geocoding error:', error);
            });
    };


    emit('selectLocation', { place_name: 'Selected Location' }); // Emit the selectLocation event

}),
    onUnmounted(() => {
        map.value?.remove();
    })




const searchLocation = async () => {
    // Perform forward geocoding to get location suggestions based on the user's input
    try {
        const response = await maptilersdk.forwardGeocode()
            .setQuery(searchQuery.value)
            .send();

        locationSuggestions.value = response.features;
    } catch (error) {
        console.error('Forward geocoding error:', error);
    }
};

const selectLocation = (location) => {
    // Handle the selected location, e.g., move the map or add a marker
    console.log('Selected location:', location);
};



</script>


<template>
    <!-- height: calc(100vh - 200px) /* calculate height of the screen minus the heading */ ; width: 100% -->
    <div class="w-full h-screen ">
        <div class="absolute w-full h-full" ref="mapContainer"></div> <!-- width: 100% height: 100% -->
    </div>
</template>



<style scoped></style>