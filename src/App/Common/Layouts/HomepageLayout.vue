<script setup lang="ts">
import Header from "../Components/Header.vue"
import Footer from "../Components/Footer.vue"

</script>

<template>
    <div class="overflow-hidden">
        <Header></Header>

        <slot></slot>

        <Footer></Footer>
    </div>
</template>



<style scoped></style>