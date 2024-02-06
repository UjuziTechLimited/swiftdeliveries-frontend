import { defineStore } from 'pinia'

export const useMapStore = defineStore('riders', {
    state: () => ({
      markerarray: [],
      

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
        }
    }

    




})