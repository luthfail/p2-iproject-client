import { defineStore } from "pinia";
import axios from "../axios/axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    albumsData: [],
    cartData: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchData() {
      const { data } = await axios({
        method: 'GET',
        url: "albums/",
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      this.albumsData = data
    },
    async fetchCart() {
      const { data } = await axios({
        method: 'GET',
        url: "cart/",
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      this.cartData = data
    },
    async fetchitem(id) {
      const { data } = await axios({
        method: 'GET',
        url: "albums/" + id,
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      return data
    }
  },
});
