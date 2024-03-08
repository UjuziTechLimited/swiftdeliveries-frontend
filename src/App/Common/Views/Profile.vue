<script setup>
import { ref } from 'vue';

import { useAuthStore } from '@/stores/authStore';

import SuperadminLayout from '@/App/Common/Layouts/SuperadminLayout.vue';
import DrawerLayout from '@/App/Common/Layouts/DrawerLayout.vue';
import RiderLayout from '@/App/Common/Layouts/RiderLayout.vue';
import NotFoundError from '@/App/Common/Components/NotFoundError.vue';

import ProfileView from '@/App/Common/Components/ProfileView.vue';

const authStore = useAuthStore();


</script>


<template>
    <div v-if="authStore.authUser === null">
        <NotFoundError />
    </div>
    <div v-else-if="authStore.authUser.role === 'super'">
        <SuperadminLayout>
            <ProfileView />
        </SuperadminLayout>
    </div>
    <div v-else-if="authStore.authUser.role === 'admin'">
        <DrawerLayout>
            <ProfileView />
        </DrawerLayout>
    </div>
    <div v-else-if="authStore.authUser.role === 'dispatch'">
        <DrawerLayout>
            <ProfileView />
        </DrawerLayout>
    </div>
    <div v-else-if="authStore.authUser.role === 'rider'">
        <RiderLayout>
            <ProfileView />
        </RiderLayout>
    </div>


</template>



<style scoped></style>