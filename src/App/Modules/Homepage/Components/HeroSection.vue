
<script setup lang="ts">
import DeliveryBoyJSON from '@/assets/images/DeliveryBoy.json'

</script>

<template>
    <div class="lg:min-h-screen hero bg-base-200">
        <div class="container grid items-center p-4 m-4 mx-auto lg:grid-cols-2 bg-base-100 rounded-xl">
            <div class="items-center p-4 mx-4 my-auto">
                <h1 class="text-5xl font-bold"> Secure & Speedy Deliveries at Your Fingertips!</h1>
                <p class="py-6 font-serif">Swift Deliveries is built for businesses handling confidential documents and
                    packages,
                    ensuring secure and swift handling every step of the way.</p>
                <button class="mr-2 font-bold btn btn-primary">Learn More</button>
                <button class="font-bold btn btn-secondary">Get a Quote</button>
            </div>
            <div class="hidden mockup-phone lg:block border-primary">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <Vue3Lottie class="" :animationData="DeliveryBoyJSON" :height="500" :width="300" />.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>