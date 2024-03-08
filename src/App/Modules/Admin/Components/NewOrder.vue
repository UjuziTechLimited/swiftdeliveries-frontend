<!-- src/App/Modules/Orders/Components/NewOrderForm.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';


const ordersStore = useOrdersStore();
const editMode = ref(false); // Add this line


const order = ref({
    id: '',
    orderType: '',
    recipient: {
        name: '',
        address: '',
        phoneNumber: '',
    }
})
const emit = defineEmits(['submitForm', 'updateOrder']);




const submitForm = (order) => {
    emit('submitForm', order);
    my_modal_3.close();
}



</script>


<template>
    <div class="text-xl text-center font-headings">
        New Order
    </div>
    <form class="space-y-4" @submit.prevent="submitForm(order)">
        <div>
            <label class="label">
                <span class="text-base label-text">Recipient Name</span>
            </label>
            <input v-model="order.recipient.name" type="text" placeholder="John Doe"
                class="w-full input input-bordered input-primary" />
        </div>
        <div>
            <label class="label">
                <span class="text-base label-text">Recipient Address</span>
            </label>
            <input v-model="order.recipient.address" type="text" placeholder="Address"
                class="w-full input input-bordered input-primary" />
        </div>
        <div>
            <label class="label">
                <span class="text-base label-text">Recipient Phone Number</span>
            </label>
            <input v-model="order.recipient.phoneNumber" type="text" placeholder="2547xxxxxxxx"
                class="w-full input input-bordered input-primary" />
        </div>
        <div>
            <label class="label">
                <span class="text-base label-text">Delivery Type</span>
            </label>
            <select v-model="order.orderType" class="w-full max-w-xs select select-bordered">
                <option disabled selected>Delivery Type</option>
                <option>Package</option>
                <option>Document</option>
            </select>
        </div>

        <div>
            <button type="submit" class="btn btn-block btn-primary">Create Order</button>
            <!-- display create order or edit order -->

        </div>
    </form>
</template>