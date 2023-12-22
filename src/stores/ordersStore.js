//src/stores/ordersStore.js
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {

    state: () => ({
        orders: [
            {
                id: 1,
                recipient: {
                    name: 'John Doe',
                    address: 'CBD',
                    phoneNumber: '2547xxxxxxxx',

                },
                orderType: 'Package',
                deliveryStatus: true,
                isAssigned: false,
                assignedRider: 'Rider 1'
            },
            {
                id: 2,
                recipient: {
                    name: 'Jane Doe',
                    address: 'Karen',
                    phoneNumber: '2547xxxxxxxx',
                },
                orderType: 'Document',
                deliveryStatus: true,
                isAssigned: true,
                assignedRider: 'Rider 3'
            },
            {
                id: 3,
                recipient: {
                    name: 'Mat Doe',
                    address: 'South C',
                    phoneNumber: '2547xxxxxxxx',
                },
                orderType: 'Document',
                deliveryStatus: true,
                isAssigned: true,
                assignedRider: 'Rider 2'
            },
            {
                id: 4,
                recipient: {
                    name: 'Ben Doe',
                    address: 'Westlands',
                    phoneNumber: '2547xxxxxxxx',
                },
                orderType: 'Package',
                deliveryStatus: true,
                isAssigned: false,
                assignedRider: 'Rider 1'
            },
        ],
        searchQuery: '',
        selectedOrder: null

    }),
    getters: {
        filteredOrders() {
            return this.orders.filter(order =>
                order.recipient.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    actions: {
        addOrder(order) {
            order.id = this.orders.length + 1
            this.orders.push(order)
        },

        selectOrderForEdit(order) {
            this.selectedOrder = { ...order }
        },
        clearSelectedOrder() {
            this.selectedOrder = null
        },
        toggleDeliveryStatus(orderId) {
            const index = this.orders.findIndex((order) => order.id === orderId);
            this.orders[index].deliveryStatus = !this.orders[index].deliveryStatus;
        },

        removeOrder(order) {
            this.orders.splice(this.orders.indexOf(order), 1)
        },
        searchOrders(query) {
            //
            this.searchQuery = query
        },
        clearSearchResults() {
            this.searchQuery = ''
        }
    }
})