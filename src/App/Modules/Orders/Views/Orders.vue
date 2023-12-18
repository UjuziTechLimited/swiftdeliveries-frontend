
<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import AdminLayout from '../../../Common/Layouts/AdminLayout.vue';
import OrderList from '../Components/OrderList.vue';
import router from '@/router';

const order = ref({
    recipient: '',
    packageType: '',
    // Add other order fields here
});

const submitOrder = async () => {
    console.log(order.value)
    try {
        // Send a POST request to your Laravel API endpoint
        const response = await axios.post('http://localhost:8000/api/orders', order);

        // Handle the response as needed (e.g., show a success message)
        console.log('Order submitted successfully', response.data);

        // Optionally, reset the form or navigate to another page
        router.push('/success'); // Replace '/success' with your desired route
    } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error('Error submitting order', error);
    }

};

</script>


<template>
    <AdminLayout>

        <div class="container mx-auto">
            <h1 class="p-2 m-2 text-2xl font-extrabold text-center">Orders</h1>
            <div class="p-2 m-2 ">
                <button class="btn" onclick="my_modal_1.showModal()">New Order</button>
                <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <form @submit.prevent="submitOrder">
                            <!-- Your form fields go here, for example: -->
                            <label for="recipient">Recipient:</label>
                            <input v-model="order.recipient" type="text" id="recipient" required>

                            <label for="packageType">Package Type:</label>
                            <select v-model="order.packageType" id="packageType" required>
                                <option value="package">Package</option>
                                <option value="document">Document</option>
                            </select>

                            <!-- Add other form fields as needed -->

                            <button type="submit">Submit Order</button>
                        </form>
                        <div class="modal-action">
                            <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
            <div>
                <OrderList></OrderList>
            </div>
        </div>

    </AdminLayout>
</template>

<style scoped></style>