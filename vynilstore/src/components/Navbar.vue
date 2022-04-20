<template>
    <nav
        class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <button
                class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                testing
            </button>
            <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                <a class="text-xl text-white pr-2 font-semibold">Navbar</a>
                <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li class="nav-item p-2">
                        <router-link to="/mycart" class="nav-link text-white">My Cart</router-link>
                    </li>
                    <li class="nav-item p-2">
                        <router-link to="/login" class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0">Login</router-link>
                    </li>
                    <li class="nav-item p-2">
                        <router-link to="/register" class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0">Register</router-link>
                    </li>
                    <li class="nav-item p-2">
                        <a @click.prevent="loggout" class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            access_token: localStorage.getItem('access_token'),
            email: localStorage.getItem('email')
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