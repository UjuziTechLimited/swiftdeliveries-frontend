//src/stores/ordersStore.js
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
    state: () => ({
        orders: [],
        searchQuery: '',
        selectedOrder: null,
    }),
    getters: {
        filteredOrders() {
            return this.orders.filter((order) =>
                order.recipient.name
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            )
        },
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
            const index = this.orders.findIndex((order) => order.id === orderId)
            this.orders[index].deliveryStatus = !this.orders[index].deliveryStatus
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
        },
        selectOrderForDetails(order) {
            this.selectedOrderForDetails = { ...order }
        },
        clearSelectedOrderForDetails() {
            this.selectedOrderForDetails = null
        },
    },
})
