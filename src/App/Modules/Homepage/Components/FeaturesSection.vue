<template>
    <section class="container p-4 mx-auto snap-start" id="features">
        <div class="p-4 m-4 text-center ">
            <h1 class="my-2 text-4xl font-bold font-headings marker:">Features</h1>
        </div>

        <div class="grid justify-center gap-4 md:grid-cols-3">
            <div
                class="m-2 duration-300 ease-in-out shadow-2xl md:shadow-xl hover:-translate-y-6 card hover:shadow-2xl bg-base-300 ">
                <figure>
                    <img src="@/assets/images/padlock.png" alt="padlock" class="w-1/2" />
                </figure>
                <div class="card-body rounded-xl">
                    <h2 class="card-title font-headings">Unbreakable Security!</h2>
                    <p class="font-content">256-bit encryption, secure login, & access control for complete peace of mind
                    </p>
                </div>
            </div>

            <div
                class="m-2 duration-300 ease-in-out shadow-2xl md:shadow-xl hover:-translate-y-6 card hover:shadow-2xl bg-base-300">
                <figure>
                    <img src="@/assets/images/business-analysis.png" class="w-1/2" />
                </figure>
                <div class="card-body rounded-xl">
                    <h2 class="card-title font-headings">Data-Driven Insights!</h2>
                    <p class="font-content">Gain valuable analytics on delivery performance, optimize routes, and improve
                        efficiency.</p>

                </div>
            </div>
            <div
                class="m-2 duration-300 ease-in-out shadow-2xl md:shadow-xl hover:-translate-y-6 card hover:shadow-2xl bg-base-300">
                <figure>
                    <img src="@/assets/images/location-pin.png" alt="tracking" class="w-1/2" />
                </figure>
                <div class="card-body rounded-xl">
                    <h2 class="card-title font-headings">Multi-Stop Mastery!</h2>
                    <p class="font-content">Manage multiple deliveries efficiently with priority scheduling & real-time
                        tracking.</p>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style></style>
