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
        searchQuery: '',
        selectedRider: null
    }),
    getters: {
        filteredRiders() {
            return this.riders.filter(rider =>
                rider.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
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