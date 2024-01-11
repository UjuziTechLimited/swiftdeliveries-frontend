<template>
<div>

    <div class="max-h-screen mx-4">
            <div class="h-96">
                <RiderMap />
            </div>

            <div>
                <div>
                    <span>item_details</span>
                    <span>{{ delivery_details.request_id }}</span>
            </div>
            </div>


        </div>

</div>

    </template>

    <script setup>

    import RiderMap from "../Components/RiderMap.vue"
    import { useRidersStore } from "@/stores/ridersStore";
 
    import router from '@/router'

    const delivery_id = router.params.id

    const riderStore = useRidersStore()

    const delivery_details = riderStore.getDeliveryDetails(delivery_id)




</script>

    <style></style>