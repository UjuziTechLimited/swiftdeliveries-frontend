<template>
    <div>

        <div class="max-h-screen mx-4">
            <div class="h-96">
                <RiderGoogleMap/>
            </div>

            <div class="grid grid-cols-3 gap-3">
                <div class="flex flex-col ">
                    <span class="text-lg ">item_details</span>
                    <span>{{ delivery_details.item_details }}</span>
                </div>


                <div class="flex flex-col ">
                    <span class="text-lg ">Name</span>
                    <span>{{ delivery_details.recipient_name }}</span>
                </div>


                <div class="flex flex-col ">
                    <span class="text-lg ">Email</span>
                    <span>{{ delivery_details.recipient_address }}</span>
                </div>


                <div class="flex flex-col ">
                    <span class="text-lg ">Phone Number:</span>
                    <span>{{ delivery_details.recipient_phone_number }}</span>
                </div>


                <div class="flex flex-col ">
                    <span class="text-lg ">Delivery Type</span>
                    <span>{{ delivery_details.delivery_type }}</span>
                </div>

                


                <div class="flex flex-col ">
                    <span class="text-lg ">Date</span>
                    <span>{{ delivery_details.created_at }}</span>
                </div>


                <div class="flex flex-col ">
                    <span class="text-lg ">Signature</span>
                
                    <button class="btn btn-outline btn-secondary w-auto h-auto" @click="signature"> Take Signature</button>
                </div>





            </div>


            <div class="flex justify-center w-auto p-4"> 
            <button class="btn btn-success w-auto h-auto"> Accept Delivery</button>
            </div>
        </div>
        

    </div>
</template>

<script setup>

import RiderMap from "../Components/RiderMap.vue"
import RiderGoogleMap from "../Components/RiderGoogleMap.vue"
import { useRidersStore } from "@/stores/ridersStore";
import { computed  } from "vue";
import router from '@/router'


// const deliveryid=router.params.id
// console.log(deliveryid.value)
// let deliveryid = '99A24J2s'

const riderStore = useRidersStore()


 const delivery_details= computed( () => riderStore.getdelivery)

const signature = () => 
    {
        router.push({name: 'RiderSignature'})
    }








</script>

<style scoped ></style>