<template>
    <div class="container bg-black flex h-screen">
            <div
                class="justify-center items-center mx-auto place-self-center h-fit w-full max-w-md px-4 py-8 bg-opacity-25 shadow-sm shadow-red-500 bg-green-600 rounded-lg">
                <h3 class="text-center mx-8 my-8 text-3xl text-white">Register</h3>
                <form id="login-form" class="self-center">
                    <div class="flex mb-3 mx-8">
                        <label class="w-36 text-white text-lg">Name</label>
                        <input v-model="name" class="w-full rounded px-2 py-1" type="text" id="email" placeholder="ex: your name">
                    </div>
                    <div class="flex mb-3 mx-8">
                        <label class="w-36 text-white text-lg">Email</label>
                        <input v-model="email" class="w-full rounded px-2 py-1" type="email" id="email" placeholder="example@email.com">
                    </div>
                    <div class="flex mb-3 mx-8">
                        <label class="w-36 text-white text-lg">Password</label>
                        <input v-model="password" class="w-full rounded px-2 py-1" type="password" id="password" placeholder="password">
                    </div>
                    <div class="flex mx-8 my-2">
                        <p class="text-white">already have account? <router-link to="/login" class="hover:text-lime-400">Login</router-link>
                        </p>
                    </div>
                    <div class="flex w-full py-8 justify-center">
                        <button @click.prevent="registered"  type="submit"
                            class="py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg w-60">Register</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
import { mapStores, mapActions, mapState } from "pinia";
    import { registerStore } from '../stores/register'
    import Navbar from "../components/Navbar.vue";
    export default {
    name: "Register",
    computed: {
        ...mapStores(registerStore)
    },
    data() {
        return {
            name: "",
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(registerStore, ["doRegister"]),
        async registered() {
            try {
                const response = await this.doRegister({
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                this.$router.push("/login");
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    components: { 
        Navbar 
    }
}
</script>

<style>

</style>