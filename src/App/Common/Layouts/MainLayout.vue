<script setup lang="ts">
// import NavBar from "../Components/Navbar.vue";
import Header from "../Components/Header.vue"
import Footer from "../Components/Footer.vue";


</script>

<template>
    <div class="overflow-hidden">
        <!-- <NavBar></NavBar> -->
        <Header></Header>
        <slot></slot>

        <Footer></Footer>

    </div>
</template>



<style scoped></style>