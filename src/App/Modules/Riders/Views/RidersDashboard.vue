<script setup>
import UpcomingDelivery from "../Components/UpcomingDelivery.vue"
import OngoingDelivery from "../Components/OngoingDelivery.vue";


</script>

<template>
    <div>

        <section>

            <h1 class="font-bold font-headings text-center text-2xl" >Ongoing Deliveries</h1>
            <div>
                <OngoingDelivery />
            </div>


        </section>

        <section id="Upcoming_Orders">

            <h1 class="font-bold font-headings text-center text-2xl">Upcoming Orders</h1>

            <div class="px-2">
                <UpcomingDelivery />
            </div>



        </section>





    </div>
</template>



<style scoped></style>