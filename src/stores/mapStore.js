import { defineStore } from 'pinia';
import axios from 'axios'

export const useMapStore = defineStore('map', {
  state: () => ({
    markerarray: [],
    directions: [],
  }),
  getters: {
    getmarkers() {
      return this.markerarray
    }
  },
  actions: {
    async addmarker(data) {
      this.markerarray.push(data)
    },
    removeMarker(data) {
      this.markerarray.pop(data)
    },
    async getdirections() {
      console.log(this.markerarray[0].position.lat)
      const start_location_coords = this.markerarray[0].position.lat + "," + this.markerarray[0].position.lng
      console.log(start_location_coords)
      const end_location_coords = this.markerarray[1].position.lat + "," + this.markerarray[1].position.lng
      console.log(end_location_coords)
      await axios.get('/',
        {
          start_location: "-1.2253995,36.8976372",
          end_location: "-1.2268966,36.9252782"
        }
      ).then((response) => {
        this.directions = response.data
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
})