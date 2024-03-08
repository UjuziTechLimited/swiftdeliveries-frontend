<script setup lang="ts">
// import NavBar from "../Components/Navbar.vue";
import AdminHeader from "../Components/AdminHeader.vue"
import AdminFooter from "../Components/AdminFooter.vue";


</script>

<template>
    <div class="overflow-hidden">
        <!-- <NavBar></NavBar> -->
        <AdminHeader></AdminHeader>
        <slot></slot>

        <AdminFooter></AdminFooter>

    </div>
</template>



<style scoped></style>