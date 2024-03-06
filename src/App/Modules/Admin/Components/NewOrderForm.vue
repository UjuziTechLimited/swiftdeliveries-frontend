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
    },
    orderDescription: '',
    signatureRequired: '',
    returnRequired: '',
    deliveryInstructions: '',
    assignedRider: ''
})
const emit = defineEmits(['submitForm', 'updateOrder']);




const submitForm = (order) => {
    emit('submitForm', order);
    newOrderForm.close();
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
            <label class="label">
                <span class="text-base label-text">Order Description</span>
            </label>
            <input v-model="order.orderDescription" type="text" placeholder="Order Description"
                class="w-full input input-bordered input-primary" />
        </div>
        <div class="form-control">
            <label class="cursor-pointer label">
                <span class="label-text">Signature Required?</span>
                <input v-model="order.signatureRequired" type="checkbox" checked="checked"
                    class="checkbox checkbox-primary" />
            </label>
        </div>
        <div class="form-control">
            <label class="cursor-pointer label">
                <span class="label-text">Return Required?</span>
                <input v-model="order.returnRequired" type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            </label>
        </div>
        <div>
            <label class="label">
                <span class="text-base label-text">Delivery Instructions</span>
            </label>
            <input v-model="order.deliveryInstructions" type="text" placeholder="instructions"
                class="w-full input input-bordered input-primary" />
        </div>

        <!-- assign rider from a list of available riders -->
        <div>
            <label class="label">
                <span class="text-base label-text">Select Rider</span>
            </label>
            <select v-model="order.assignedRider" class="w-full max-w-xs select select-bordered">
                <!-- <option disabled selected>Select Rider</option> -->
                <option>Rider 1</option>
                <option>Rider 2</option>
            </select>
        </div>

        <div>
            <button type="submit" class="btn btn-block btn-primary">Create Order</button>
        </div>
    </form>
</template>