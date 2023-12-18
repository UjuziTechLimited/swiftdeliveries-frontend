<template>
    <section class="container p-4 mx-auto " id="features">
        <div class="p-4 m-4 text-center ">
            <h1 class="text-4xl font-bold">Features</h1>
        </div>

        <div class="flex flex-wrap justify-center">
            <div class="m-2 duration-300 ease-in-out shadow-xl card w-96 hover:shadow-2xl bg-base-100 ">
                <figure>
                    <img src="@/assets/images/padlock.png" alt="padlock" class="w-1/2" />
                </figure>
                <div class="card-body rounded-xl">
                    <h2 class="card-title">Unbreakable Security!</h2>
                    <p>256-bit encryption, secure login, & access control for complete peace of mind</p>
                </div>
            </div>

            <div class="m-2 duration-300 ease-in-out shadow-xl card w-96 hover:shadow-2xl bg-base-100">
                <figure>
                    <img src="@/assets/images/business-analysis.png" class="w-1/2" />
                </figure>
                <div class="card-body rounded-xl">
                    <h2 class="card-title">Data-Driven Insights!</h2>
                    <p>Gain valuable analytics on delivery performance, optimize routes, and improve efficiency.</p>

                </div>
            </div>
            <div class="m-2 duration-300 ease-in-out shadow-xl card w-96 hover:shadow-2xl bg-base-100">
                <figure>
                    <img src="@/assets/images/location-pin.png" alt="tracking" class="w-1/2" />
                </figure>
                <div class="card-body rounded-xl">
                    <h2 class="card-title">Multi-Stop Mastery!</h2>
                    <p>Manage multiple deliveries efficiently with priority scheduling & real-time tracking.</p>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style></style>
