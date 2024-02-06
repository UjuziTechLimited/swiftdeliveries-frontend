
<script setup>
import { computed } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';


const ordersStore = useOrdersStore();

const assignedOrders = computed(() => {
    return ordersStore.orders.filter((order) => order.isAssigned);
});



</script>

<template>
    <section>
        <div class="overflow-x-auto">
            <table class="table" v-for="order in assignedOrders" :key="order.id">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Recipient Name</th>
                        <th>Assigned Rider</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr>
                        <th>{{ order.id }}</th>
                        <td>{{ order.recipient.name }}</td>
                        <td>{{ order.assignedRider }}</td>
                        <td>
                            <button class="btn btn-primary">Mark as Delivered</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>