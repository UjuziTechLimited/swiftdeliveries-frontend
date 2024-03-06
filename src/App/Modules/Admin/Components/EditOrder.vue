<!-- src/App/Modules/Orders/Components/EditOrder.vue -->
<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';
const props = defineProps(['order']);
const emit = defineEmits(['editOrder']);

const form = ref({
    id: '',
    orderType: '',
    recipient: {
        name: '',
        address: '',
        phoneNumber: '',
    }
})


</script>

<template>
    <div>
        <div class="text-xl text-center font-headings">Edit Order</div>
        <form class="space-y-4" @submit.prevent="submitForm">
            <!-- ... (form fields) ... -->
            <div>
                <label class="label">
                    <span class="text-base label-text">{{ order.name }}</span>
                </label>

            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Recipient Name</span>
                </label>
                <input v-model="form.recipient.name" type="text" placeholder="John Doe"
                    class="w-full input input-bordered input-primary" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Recipient Address</span>
                </label>
                <input v-model="form.recipient.address" type="text" placeholder="Address"
                    class="w-full input input-bordered input-primary" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Recipient Phone Number</span>
                </label>
                <input v-model="form.recipient.phoneNumber" type="text" placeholder="2547xxxxxxxx"
                    class="w-full input input-bordered input-primary" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Delivery Type</span>
                </label>
                <select v-model="form.orderType" class="w-full max-w-xs select select-bordered">
                    <option disabled selected>Delivery Type</option>
                    <option>Package</option>
                    <option>Document</option>
                </select>
            </div>
            <div>
                <button type="submit" class="btn btn-block btn-primary">Update Order</button>
            </div>
        </form>
    </div>
</template>
