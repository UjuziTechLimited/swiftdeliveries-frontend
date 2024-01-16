<template>
<div>

    <div class="max-h-screen mx-4">
            <div class="h-96">
                <RiderMap />
            </div>

            <div>
                <div class="flex flex-row ">
                    <span class="text-lg ">item_details</span>
                    <span>{{ delivery_details.item_details }}</span>
            </div>

            
            </div>


        </div>

</div>

    </template>

    <script setup>

    import RiderMap from "../Components/RiderMap.vue"
    import { useRidersStore } from "@/stores/ridersStore";
  
 
    import router from '@/router'


    const deliveryid=router.params.id
    console.log(deliveryid.value)
 

    // const riderStore = useRidersStore()
    // // const delivery_id =riderStore.deliveryid

    // const delivery_details = riderStore.getdelivery





</script>

    <style scoped ></style>