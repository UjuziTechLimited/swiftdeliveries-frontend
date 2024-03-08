
<script setup>
import DeliveryBoyJSON from '@/assets/images/DeliveryBoy.json'
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="p-4 mx-auto md:container">
        <div class="grid my-2 lg:grid-cols-2 ">
            <div class="">
                <div class="flex mb-4 ">
                    <h1 class="my-auto text-4xl font-bold text-start md:text-5xl"> Elevate your deliveries,
                        <br />
                        Ignite your
                        business!
                    </h1>
                    <div class="w-1/2 lg:hidden">
                        <Vue3Lottie class="" :animationData="DeliveryBoyJSON" />
                    </div>
                </div>

                <p class=" md:text-xl font-content">From confidential documents to precious packages, Swift
                    Deliveries is your ultimate solution for secure and lightning-fast deliveries. Experience real-time
                    mastery, seamless journeys, and unleash the power of analytics to optimize routes effortlessly!</p>
                <div class="">
                    <RouterLink :to="{ name: 'Dashboard' }" class="my-2 btn btn-block btn-neutral">Login
                    </RouterLink>
                    <a href="mailto:info@ujuzitech.com" class="my-2 btn btn-block btn-primary">Book Demo</a>
                </div>

            </div>
            <div class="flex items-center justify-center hidden lg:block overflow-clip">
                <Vue3Lottie class="bg-base-300" :animationData="DeliveryBoyJSON" :height="480" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>