<script setup>
import UpcomingDelivery from "../Components/UpcomingDelivery.vue"
import OngoingDelivery from "../Components/OngoingDelivery.vue";
import DrawerLayout from "../../../Common/Layouts/DrawerLayout.vue";

</script>

<template>
    <DrawerLayout>
        <div>
            <section>
                <h1 class="text-2xl font-bold text-center font-headings">Ongoing Deliveries</h1>
                <div>
                    <OngoingDelivery />
                </div>
            </section>
            <section id="Upcoming_Orders">
                <h1 class="text-2xl font-bold text-center font-headings">Upcoming Orders</h1>
                <div class="px-2">
                    <UpcomingDelivery />
                </div>
            </section>

        </div>

    </DrawerLayout>
</template>



<style scoped></style>