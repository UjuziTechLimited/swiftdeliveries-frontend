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
        }, {
            "request_id": "1Y84LmzO",
            "delivery_type": "parcel",
            "recipient_name": "Brittani Diwell",
            "recipient_address": "bdiwell2@furl.net",
            "recipient_phone_number": "8215950411",
            "item_details": "invoice",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "transit",
            "pickup_time": "7/20/2023",
            "created_at": "6/21/2023",
            "Rider_id": "FB630530"
        }, {
            "request_id": "mFu05f14",
            "delivery_type": "package",
            "recipient_name": "Shepherd Delos",
            "recipient_address": "sdelos3@simplemachines.org",
            "recipient_phone_number": "8302060965",
            "item_details": "documents",
            "signature_required": false,
            "return_required": false,
            "delivery_status": "transit",
            "pickup_time": "1/8/2024",
            "created_at": "4/8/2023",
            "Rider_id": "LU772872"
        }, {
            "request_id": "Xs4adizt",
            "delivery_type": "package",
            "recipient_name": "Denise Coult",
            "recipient_address": "dcoult4@epa.gov",
            "recipient_phone_number": "6898883262",
            "item_details": "contracts",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "transit",
            "pickup_time": "9/23/2023",
            "created_at": "1/12/2024",
            "Rider_id": "BX574668"
        }, {
            "request_id": "erE8r9ad",
            "delivery_type": "letter",
            "recipient_name": "Devlin Rowlands",
            "recipient_address": "drowlands5@bbb.org",
            "recipient_phone_number": "9253143151",
            "item_details": "invoice",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "transit",
            "pickup_time": "8/9/2023",
            "created_at": "6/18/2023",
            "Rider_id": "OY922335"
        }, {
            "request_id": "IhJ52d1x",
            "delivery_type": "package",
            "recipient_name": "Elvera Heditch",
            "recipient_address": "eheditch6@unesco.org",
            "recipient_phone_number": "6777249309",
            "item_details": "files",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "assigned",
            "pickup_time": "7/30/2023",
            "created_at": "9/22/2023",
            "Rider_id": "ZX936183"
        }, {
            "request_id": "65rP73Sm",
            "delivery_type": "document",
            "recipient_name": "Sylas Fenix",
            "recipient_address": "sfenix7@gravatar.com",
            "recipient_phone_number": "9837062393",
            "item_details": "documents",
            "signature_required": false,
            "return_required": false,
            "delivery_status": "created",
            "pickup_time": "11/1/2023",
            "created_at": "3/9/2023",
            "Rider_id": "XZ440526"
        }, {
            "request_id": "u7ues8x3",
            "delivery_type": "envelope",
            "recipient_name": "Glennie Sausman",
            "recipient_address": "gsausman8@google.pl",
            "recipient_phone_number": "4559660085",
            "item_details": "documents",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "transit",
            "pickup_time": "10/23/2023",
            "created_at": "5/4/2023"
        }, {
            "request_id": "tW4TlsUC",
            "delivery_type": "package",
            "recipient_name": "Parry Fulton",
            "recipient_address": "pfulton9@wunderground.com",
            "recipient_phone_number": "7584348142",
            "item_details": "contracts",
            "signature_required": false,
            "return_required": false,
            "delivery_status": "completed",
            "pickup_time": "7/29/2023",
            "created_at": "4/12/2023",
            "Rider_id": "ZI442912"
        }, {
            "request_id": "57D8AanK",
            "delivery_type": "envelope",
            "recipient_name": "Patrica Zammett",
            "recipient_address": "pzammetta@tripadvisor.com",
            "recipient_phone_number": "1405567819",
            "item_details": "contracts",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "assigned",
            "pickup_time": "11/18/2023",
            "created_at": "9/23/2023",
            "Rider_id": "YS612956"
        }, {
            "request_id": "t3Crhi9b",
            "delivery_type": "package",
            "recipient_name": "Sapphira Valois",
            "recipient_address": "svaloisb@ask.com",
            "recipient_phone_number": "4139721400",
            "item_details": "reports",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "completed",
            "pickup_time": "11/20/2023",
            "created_at": "2/12/2023",
            "Rider_id": "AN843261"
        }, {
            "request_id": "M1t5A3V7",
            "delivery_type": "letter",
            "recipient_name": "Karlotta Ourtic",
            "recipient_address": "kourticc@1und1.de",
            "recipient_phone_number": "8767198767",
            "item_details": "forms",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "completed",
            "pickup_time": "2/10/2023",
            "created_at": "10/29/2023",
            "Rider_id": "RH038805"
        }, {
            "request_id": "NgxnQZXT",
            "delivery_type": "letter",
            "recipient_name": "Fritz Birdfield",
            "recipient_address": "fbirdfieldd@cloudflare.com",
            "recipient_phone_number": "2013272628",
            "item_details": "forms",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "completed",
            "pickup_time": "2/23/2023",
            "created_at": "9/30/2023",
            "Rider_id": "UZ670482"
        }, {
            "request_id": "wQlJ8Gue",
            "delivery_type": "envelope",
            "recipient_name": "Keslie Baggalley",
            "recipient_address": "kbaggalleye@oracle.com",
            "recipient_phone_number": "9953999991",
            "item_details": "documents",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "assigned",
            "pickup_time": "2/22/2023",
            "created_at": "2/13/2023"
        }, {
            "request_id": "FjExewgy",
            "delivery_type": "document",
            "recipient_name": "Rufe Mangon",
            "recipient_address": "rmangonf@flickr.com",
            "recipient_phone_number": "2277970873",
            "item_details": "documents",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "assigned",
            "pickup_time": "9/11/2023",
            "created_at": "1/4/2024",
            "Rider_id": "AV812605"
        }, {
            "request_id": "d3H993Ah",
            "delivery_type": "envelope",
            "recipient_name": "Monique Standring",
            "recipient_address": "mstandringg@drupal.org",
            "recipient_phone_number": "1297435296",
            "item_details": "documents",
            "signature_required": false,
            "return_required": false,
            "delivery_status": "assigned",
            "pickup_time": "1/20/2024",
            "created_at": "8/26/2023",
            "Rider_id": "NZ749768"
        }, {
            "request_id": "qUVJjC9m",
            "delivery_type": "envelope",
            "recipient_name": "Fletcher Kennedy",
            "recipient_address": "fkennedyh@fema.gov",
            "recipient_phone_number": "2492764666",
            "item_details": "documents",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "completed",
            "pickup_time": "11/21/2023",
            "created_at": "10/13/2023",
            "Rider_id": "CU671707"
        }, {
            "request_id": "kOgFR1Lj",
            "delivery_type": "package",
            "recipient_name": "Nadean Cocking",
            "recipient_address": "ncockingi@sbwire.com",
            "recipient_phone_number": "1055876774",
            "item_details": "contracts",
            "signature_required": false,
            "return_required": true,
            "delivery_status": "created",
            "pickup_time": "12/12/2023",
            "created_at": "11/1/2023",
            "Rider_id": "GL458436"
        }, {
            "request_id": "zeo3ve84",
            "delivery_type": "envelope",
            "recipient_name": "Celinda Guilloux",
            "recipient_address": "cguillouxj@telegraph.co.uk",
            "recipient_phone_number": "3328898100",
            "item_details": "forms",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "assigned",
            "pickup_time": "4/16/2023",
            "created_at": "3/8/2023",
            "Rider_id": "JE746824"
        }, {
            "request_id": "ilE6700m",
            "delivery_type": "envelope",
            "recipient_name": "Emanuele Vassel",
            "recipient_address": "evasselk@nasa.gov",
            "recipient_phone_number": "3795409353",
            "item_details": "documents",
            "signature_required": false,
            "return_required": true,
            "delivery_status": "assigned",
            "pickup_time": "8/11/2023",
            "created_at": "10/19/2023",
            "Rider_id": "FN848004"
        }, {
            "request_id": "xM5Tu57g",
            "delivery_type": "document",
            "recipient_name": "Brooks Parnell",
            "recipient_address": "bparnelll@parallels.com",
            "recipient_phone_number": "3734841269",
            "item_details": "documents",
            "signature_required": false,
            "return_required": false,
            "delivery_status": "created",
            "pickup_time": "7/15/2023",
            "created_at": "6/15/2023",
            "Rider_id": "GX688058"
        }, {
            "request_id": "jgHgM0qn",
            "delivery_type": "package",
            "recipient_name": "Jaime Vyvyan",
            "recipient_address": "jvyvyanm@joomla.org",
            "recipient_phone_number": "8095114956",
            "item_details": "invoice",
            "signature_required": true,
            "return_required": true,
            "delivery_status": "transit",
            "pickup_time": "1/16/2024",
            "created_at": "4/9/2023",
            "Rider_id": "JL953842"
        }, {
            "request_id": "vLy3mHpQ",
            "delivery_type": "package",
            "recipient_name": "Bryan Landa",
            "recipient_address": "blandan@360.cn",
            "recipient_phone_number": "8212312568",
            "item_details": "files",
            "signature_required": true,
            "return_required": false,
            "delivery_status": "created",
            "pickup_time": "4/5/2023",
            "created_at": "6/12/2023",
            "Rider_id": "HZ286629"
        }, {
            "request_id": "wPy7xONk",
            "delivery_type": "envelope",
            "recipient_name": "Kara Grief",
            "recipient_address": "kgriefo@etsy.com",
            "recipient_phone_number": "7667255987",
            "item_details": "files",
            "signature_required": false,
            "return_required": false,
            "delivery_status": "assigned",
            "pickup_time": "12/8/2023",
            "created_at": "12/8/2023",
            "Rider_id": "JU384535"
        }],
        searchQuery: '',
        selectedRider: null
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
        getdelivery(id) {
            return this.deliveries.find(delivery => delivery.request_id === id)
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