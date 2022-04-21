import { defineStore } from "pinia";
import axios from '../axios/axios'
import Swal from 'sweetalert2'

export const registerStore = defineStore({
    id: 'register',
    state: () => ({
        counter: 0,
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        async doRegister(data) {
            try {
                await axios({
                    method: 'POST',
                    url: "users/register",
                    data: {
                        name: data.name,
                        email: data.email,
                        password: data.password
                    }
                })
            } catch (error) {
                Swal.fire("error", error.response.data.message, 'error')
            }
        }
    }
})