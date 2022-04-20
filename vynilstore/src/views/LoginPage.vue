<template>
    <div>
        <Navbar></Navbar>
        <div class="container bg-black flex h-screen">
            <div
                class="justify-center items-center mx-auto place-self-center h-fit w-full max-w-md px-4 py-8 bg-opacity-25 shadow-sm shadow-red-500 bg-blue-600 rounded-lg">
                <h3 class="text-center mx-8 my-8 text-3xl text-white">Login to your account</h3>
                <form id="login-form" class="self-center">
                    <div class="flex mb-3 mx-8">
                        <label class="w-36 text-white text-lg">Email</label>
                        <input v-model="email" class="w-full rounded px-2 py-1" type="email" id="email" placeholder="example@email.com">
                    </div>
                    <div class="flex mb-3 mx-8">
                        <label class="w-36 text-white text-lg">Password</label>
                        <input v-model="password" class="w-full rounded px-2 py-1" type="password" id="password" placeholder="password">
                    </div>
                    <div class="flex mx-8 my-2">
                        <p class="text-white">Didn't have account? <router-link to="/register" href="#" class="hover:text-lime-400">Register</router-link>
                        </p>
                    </div>
                    <div class="flex w-full py-8 justify-center">
                        <button @click.prevent="loggedIn" type="submit"
                            class="py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg w-60">Login</button>
                    </div>
                </form>
                <div class="flex w-full justify-center">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapStores, mapActions, mapState } from "pinia";
    import { loginStore } from '../stores/login'
    import Navbar from "../components/Navbar.vue";
    export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(loginStore, ["doLogin", 'googleSignIn']),
        loggedIn() {
                this.doLogin({
                    email: this.email,
                    password: this.password
                });
        }
    },
    components: { 
        Navbar 
    }
}
</script>

<style>

</style>