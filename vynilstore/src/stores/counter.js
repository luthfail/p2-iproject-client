import { defineStore } from "pinia";
import axios from "../axios/axios";
import router from "../router/index";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    albumsData: [],
    cartData: [],
    detailData: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchData() {
      const response = await axios({
        method: 'GET',
        url: "albums",
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      this.albumsData = response.data
    },
    async fetchCart() {
      const { data } = await axios({
        method: 'GET',
        url: "albums/mycart",
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      this.cartData = data
    },
    async fetchitem(id) {
      const { data } = await axios({
        method: 'GET',
        url: `albums/${id}`,
        headers : {
          access_token: localStorage.getItem("access_token")
        }
      })
      this.detailData = data
    },
    async addToCart(id) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `albums/${id}`,
          headers : {
            access_token: localStorage.getItem("access_token")
          }
        })
        router.push("/my-cart")
      } catch (error) {
        Swal.fire("error", error.response.data.message, 'error')
      }
    },
    async buyCart(){
      console.log('check')
      try {
        const { data } = await axios({
          method: 'PATCH',
          url: "albums/mycart",
          headers : {
            access_token: localStorage.getItem("access_token")
          }
        })
        return data
      } catch (error) {
        Swal.fire("error", error.response.data.message, 'error')
      }
    }
  },
});
