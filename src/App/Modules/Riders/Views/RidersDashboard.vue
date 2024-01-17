<script setup>
import UpcomingDelivery from "../Components/UpcomingDelivery.vue"
import OngoingDelivery from "../Components/OngoingDelivery.vue";
import DrawerLayout from "../../../Common/Layouts/DrawerLayout.vue"

</script>

<template>

    <DrawerLayout>
    <div>

        <section class="my-2">

            <h1 class="font-bold font-headings text-center text-2xl" >Ongoing Deliveries</h1>
            <div>
                <OngoingDelivery />
            </div>


        </section>

        <section class="my-2" id="Upcoming_Orders">

            <h1 class="font-bold font-headings text-center text-2xl">Upcoming Orders</h1>

            <div class="px-2">
                <UpcomingDelivery />
            </div>



        </section>





    </div>

    </DrawerLayout>
</template>



<style scoped></style>