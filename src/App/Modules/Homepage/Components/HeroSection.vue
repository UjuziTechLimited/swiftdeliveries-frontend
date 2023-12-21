
<script setup lang="ts">
import DeliveryBoyJSON from '@/assets/images/DeliveryBoy.json'

</script>

<template>
    <div class="container p-4 mx-auto text-center bg-base-200">
        <div class="grid my-8 -gap-2 lg:grid-cols-2 ">

            <div class="p-8 m-4 bg-base-100 rounded-3xl">
                <h1 class="text-5xl font-bold text-center font-headings"> Secure & Speedy Deliveries at Your Fingertips!
                </h1>
                <p class="py-6 text-xl text-center font-content">Swift Deliveries is built for businesses handling
                    confidential
                    documents and
                    packages,
                    ensuring secure and swift handling every step of the way.</p>
                <div class="">
                    <button class="my-2 btn btn-block btn-neutral">Learn More</button>
                    <button class="my-2 btn btn-block btn-primary">Get a Quote</button>
                </div>

            </div>
            <div class="flex items-center justify-center hidden rounded-full lg:block bg-base-300 overflow-clip">
                <Vue3Lottie class="bg-base-300" :animationData="DeliveryBoyJSON" :height="480" />
            </div>
            <div class="mt-4 md:hidden">
                <Vue3Lottie class="bg-base-300" :animationData="DeliveryBoyJSON" :height="144" :width="240" />
            </div>


        </div>
    </div>
</template>

<style scoped></style>