//src/stores/inboxStore.js
import { defineStore } from 'pinia'

export const useInboxStore = defineStore('inbox', {

    state: () => ({
        inbox: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@doe.com',
                message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr',
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'jane@doe.com',
                message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr',
            },

        ],
        searchQuery: '',
        selectedInbox: null

    }),
    getters: {
        filteredInbox() {
            return this.inbox.filter(inbox =>
                inbox.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    actions: {
        // addOrder(order) {
        //     order.id = this.orders.length + 1
        //     this.orders.push(order)
        // },

        // selectOrderForEdit(order) {
        //     this.selectedInbox = { ...order }
        // },
        clearSelectedInbox() {
            this.selectedInbox = null
        },
        // toggleDeliveryStatus(orderId) {
        //     const index = this.orders.findIndex((order) => order.id === orderId);
        //     this.orders[index].deliveryStatus = !this.orders[index].deliveryStatus;
        // },

        removeInbox(inbox) {
            this.inbox.splice(this.inbox.indexOf(inbox), 1)
        },
        searchInbox(query) {
            //
            this.searchQuery = query
        },
        clearSearchResults() {
            this.searchQuery = ''
        },
        selectInboxForDetails(order) {
            this.selectedInboxForDetails = { ...inbox };
        },
        clearSelectedInboxForDetails() {
            this.selectedInboxForDetails = null;
        },

    }
})