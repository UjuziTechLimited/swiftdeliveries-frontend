//src/stores/organizationsStore.js
import { defineStore } from 'pinia'

export const useOrganizationsStore = defineStore('organizations', {

    state: () => ({
        organizations: [
            {
                id: 1,
                name: "Organization 1",

            },
            {
                id: 2,
                name: "Organization 2",

            },
            {
                id: 3,
                name: "Organization 3",

            }

        ],
        searchQuery: '',
        selectedOganization: null

    }),
    getters: {
        filteredOrganizations() {
            return this.organizations.filter(organization =>
                organization.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    actions: {
        addOrganization(organization) {
            organization.id = this.organizations.length + 1
            this.organizations.push(organization)
        },

        selectOrganizationForEdit(organization) {
            this.selectedOganization = { ...organization }
        },
        clearSelectedOrganization() {
            this.selectedOganization = null
        },
        // toggleDeliveryStatus(organizationId) {
        //     const index = this.organizations.findIndex((organization) => organization.id === organizationId);
        //     this.organizations[index].deliveryStatus = !this.organizations[index].deliveryStatus;
        // },

        removeOrganization(organization) {
            this.organizations.splice(this.organizations.indexOf(organization), 1)
        },
        searchOrganizations(query) {
            //
            this.searchQuery = query
        },
        clearSearchResults() {
            this.searchQuery = ''
        },
        selectOrganizationForDetails(organization) {
            this.selectedOganizationForDetails = { ...organization };
        },
        clearSelectedOrganizationForDetails() {
            this.selectedOganizationForDetails = null;
        },

    }
})