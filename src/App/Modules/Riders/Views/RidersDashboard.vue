<script setup>
import NewOrders from "../Components/NewOrders.vue"
</script>

<template>
    <div>
        <h1>Riders Dashboard</h1>
        <div class="flex flex-wrap justify-center gap-10">
                <button class="btn" onclick="newOrderForm.showModal()">New Order</button>
                <dialog id="newOrderForm" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </form>
                        <form>
                            <label for="name">Name</label>
                            <input type="text" id="name" class="input input-bordered" />
                            <button class="">New Modal</button>
                        </form>
                    </div>
                </dialog>

                <!-- <input v-model="ordersStore.searchQuery" @input="searchOrders" class="input input-bordered"
                    placeholder="Search Orders" />
                <button class="btn btn-circle btn-error" @click="clearSearch">X</button> -->
            </div>
    </div>

    <div>
        <h2>New Ordes</h2>
<NewOrders/>
        
    </div>  

</template>



<style scoped></style>