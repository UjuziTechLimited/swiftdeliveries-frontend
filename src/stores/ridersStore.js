import { defineStore } from 'pinia'

export const useRidersStore = defineStore('riders', {

    state: () => ({
        riders: [
            {
                id: 0,
                name: 'John Doe',
                phoneNumber: '2547xxxxxxxx',
                accountStatus: 'active',
                assignStatus: true,

            },
            {
                id: 1,
                name: 'Jane Doe',
                phoneNumber: '2547xxxxxxxx',
                accountStatus: 'inactive',
                assignStatus: false,
            },
        ],
        deliveries: [{
            "request_id": "99A24J2s",
            "delivery_type": "package",
            "recipient_name": "Farah Lyndon",
            "recipient_address": "flyndon0@etsy.com",
            "recipient_phone_number": "2513949548",
            "item_details": "contracts",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "completed",
            "pickup_time": "6/21/2023",
            "created_at": "3/29/2023",
            "Rider_id": "GZ916969"
        }, {
            "request_id": "68Ry95L3",
            "delivery_type": "envelope",
            "recipient_name": "Corney Scaice",
            "recipient_address": "cscaice1@mapquest.com",
            "recipient_phone_number": "7239630812",
            "item_details": "files",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "transit",
            "pickup_time": "9/23/2023",
            "created_at": "1/31/2023",
            "Rider_id": "ET548556"
        },
        ],
        searchQuery: '',
        selectedRider: null,
        selected_delivery_id: '99A24J2s',
    }),
    getters: {
        filteredRiders() {
            return this.riders.filter(rider =>
                rider.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
        filtereddeliveries() {
            return this.deliveries.filter(delivery =>
                delivery.delivery_status === "created"
            )
        },
        filtered_ongoing_deliveries() {
            return this.deliveries.filter(delivery =>
                delivery.delivery_status === "transit"
            )
        },
        getdelivery() {
            return this.deliveries.find(delivery => delivery.request_id === this.selected_delivery_id)
        }
    },
    actions: {
        addRider(rider) {
            rider.id = this.riders.length + 1
            this.riders.push(rider)
        },
        selectRiderForEdit(rider) {
            this.selectedRider = { ...rider }
        },
        clearSelectedOrder() {
            this.selectedRider = null
        },
        toggleAssignStatus(riderId) {
            const index = this.riders.findIndex((rider) => rider.id === riderId);
            this.riders[index].assignStatus = !this.riders[index].assignStatus;
        },
        toggleAccountStatus(riderId) {
            const index = this.riders.findIndex((rider) => rider.id === riderId);
            this.riders[index].accountStatus = !this.riders[index].accountStatus;
        },
        removeRider(rider) {
            this.riders.splice(this.riders.indexOf(rider), 1)
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