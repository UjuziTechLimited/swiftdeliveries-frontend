<script setup lang="ts">
import Header from "../Components/Header.vue"
import Footer from "../Components/Footer.vue"

</script>

<template>
    <div class="overflow-hidden bg-base-200">
        <Header></Header>

        <slot></slot>

        <Footer></Footer>
    </div>
</template>



<style scoped></style>