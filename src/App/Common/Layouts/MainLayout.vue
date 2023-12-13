<script setup lang="ts">
import NavBar from "../Components/Navbar.vue";


</script>

<template>
    <div class="bg-gray-100">
        <NavBar></NavBar>

        <slot></slot>

        <!-- <Footer></Footer> -->

    </div>
</template>



<style scoped></style>