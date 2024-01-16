<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();


const onLogout = async () => {
    if (await authStore.logout()) {
        router.push('/login');
    } else {
        console.error('Error: Failed to Logout');
    }

}


</script>



<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
                <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                </a>
            </li>
            <li><a>Settings</a></li>
            <li><button type="button" @click="onLogout">Logout</button></li>
        </ul>
    </div>
</template>

<style scoped></style>