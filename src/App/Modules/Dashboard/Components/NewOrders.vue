
<script setup>
import { computed } from 'vue';
import { useOrdersStore } from '@/stores/ordersStore';


const ordersStore = useOrdersStore();

const newOrders = computed(() => {
    return ordersStore.orders.filter((order) => order.isAssigned === false);
});


</script>

<template>
    <section>
        <div class="overflow-x-auto">
            <table class="table" v-for="order in newOrders" :key="order.id">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Recipient Name</th>
                        <th>Recipient Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{{ order.id }}</th>
                        <td>{{ order.recipient.name }}</td>
                        <td>{{ order.recipient.address }}</td>
                        <td>
                            <button class="btn btn-primary">Assign Rider</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>