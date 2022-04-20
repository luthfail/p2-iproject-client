<template>
    <div>
            <nav class="bg-green-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" class="flex items-center">
                        <img src="../assets/968063.png" class="mr-3 h-6 sm:h-9">
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Jajan Vinyl</span>
                    </a>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li v-if="access_token">
                                <h5 class="block py-2 pr-4 pl-3 text-white">Hello, {{name}}</h5>
                            </li>
                            <li>
                                <router-link to="/" class="block py-2 pr-4 pl-3 text-white">Home</router-link>
                            </li>
                            <li v-if="!access_token">
                                <router-link to="/login" class="block py-2 pr-4 pl-3 text-white">Login</router-link>
                            </li>
                            <li v-if="!access_token">
                                <router-link to="/register" class="block py-2 pr-4 pl-3 text-white">Register</router-link>
                            </li>
                            <li v-if="access_token">
                                <a @click.prevent="loggout" href="#" class="block py-2 pr-4 pl-3 text-white">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            access_token: localStorage.getItem('access_token'),
            email: localStorage.getItem('email'),
            name: localStorage.getItem('name')
        }
    },
    methods: {
        loggout() {
            localStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>

<style>
</style>