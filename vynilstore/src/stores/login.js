import { defineStore } from "pinia";
import router from '../router/index'
import axios from '../axios/axios'
import Swal from 'sweetalert2'

export const loginStore = defineStore({
    id: 'login',
    state: () => ({
        counter: 0
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        async doLogin(data) {
            try {
                const response = await axios({
                    method: 'POST',
                    url: "users/login",
                    data: {
                        email: data.email,
                        password: data.password
                    }
                })
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("id", response.data.id);
                router.push("/");
            } catch (error) {
                Swal.fire("error", error.response.data.message, 'error')
            }
        }
    }
})  