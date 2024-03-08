//src/stores/adminStore.js
import { defineStore } from 'pinia'
import { useUsersStore } from './usersStore';

export const useAdminStore = defineStore('admins', {

    state: () => ({
        admins: [
            // {
            //     id: 1,
            //     name: 'Admin 1',
            //     email: 'admin1@admin.com',
            //     organization: 'org 1'
            // },
            // {
            //     id: 2,
            //     name: 'Admin 2',
            //     email: 'admin2@admin.com',
            //     organization: 'org'
            // }

        ],
        searchQuery: '',
        selectedAdmin: null

    }),
    getters: {
        // getAllAdmins() {
        //     const usersStore = useUsersStore();
        //     const admins = usersStore.users.filter(user => user.role === 'admin')
        //     this.admins.push(...admins)
        //     // return usersStore.users.filter(user => user.role === 'admin')
        // },

        //get all admins from the users store and add them to the admins array



        filteredAdmins() {
            return this.admins.filter(admin =>
                admin.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    actions: {
        addAdmin(admin) {
            admin.id = this.admins.length + 1
            this.admins.push(admin)
        },

        selectAdminForEdit(admin) {
            this.selectedAdmin = { ...admin }
        },
        clearSelectedAdmin() {
            this.selectedAdmin = null
        },
        // toggleDeliveryStatus(orderId) {
        //     const index = this.admins.findIndex((admin) => admin.id === orderId);
        //     this.admins[index].deliveryStatus = !this.admins[index].deliveryStatus;
        // },

        removeAdmin(admin) {
            this.admins.splice(this.admins.indexOf(admin), 1)
        },
        searchAdmins(query) {
            //
            this.searchQuery = query
        },
        clearSearchResults() {
            this.searchQuery = ''
        },
        selectAdminForDetails(admin) {
            this.selectedAdminForDetails = { ...admin };
        },
        clearSelectedAdminForDetails() {
            this.selectedAdminForDetails = null;
        },

    }
})