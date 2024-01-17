<script setup>
import UpcomingDelivery from "../Components/UpcomingDelivery.vue"
import OngoingDelivery from "../Components/OngoingDelivery.vue";
import AdminLayout from "@/App/Common/Layouts/AdminLayout.vue";


</script>

<template>
    <div>
        <AdminLayout>
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




        </AdminLayout>
    </div>
</template>



<style scoped></style>