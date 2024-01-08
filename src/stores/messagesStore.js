//src/stores/inboxStore.js
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {

    state: () => ({
        messages: [
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
            {
                id: 3,
                name: 'Jake Doe',
                email: 'jane@doe.com',
                message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr',
            },

        ],
        searchQuery: '',
        selectedMessage: null

    }),
    getters: {
        filteredMessages() {
            return this.messages.filter(message =>
                message.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    actions: {
        addMessage(message) {
            message.id = this.messages.length + 1
            this.messages.push(message)
            // console.log('Form submitted:', message);
            // console.log('Messages:', this.messages);

        },

        // selectOrderForEdit(order) {
        //     this.selectedInbox = { ...order }
        // },
        clearSelectedInbox() {
            this.selectedMessage = null
        },
        // toggleDeliveryStatus(orderId) {
        //     const index = this.orders.findIndex((order) => order.id === orderId);
        //     this.orders[index].deliveryStatus = !this.orders[index].deliveryStatus;
        // },

        removeMessage(message) {
            this.messages.splice(this.messages.indexOf(message), 1)
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