<script setup>
import UpcomingDelivery from "../Components/UpcomingDelivery.vue"
import OngoingDelivery from "../Components/OngoingDelivery.vue";
import RiderLayout from "../../../Common/Layouts/RiderLayout.vue";

</script>

<template>
    <RiderLayout>
        <div>
            <section>
                <h1 class="text-2xl font-bold text-center font-headings">New Deliveries</h1>
                <div>
                    <OngoingDelivery />
                </div>
            </section>
            <section id="Upcoming_Orders">
                <h1 class="text-2xl font-bold text-center font-headings">Past Deliveries</h1>
                <div class="px-2">
                    <UpcomingDelivery />
                </div>
            </section>

        </div>

    </RiderLayout>
</template>



<style scoped></style>