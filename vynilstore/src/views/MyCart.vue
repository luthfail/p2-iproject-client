<template>
<Navbar></Navbar>
    <div>
        <div class="text-2xl text-center m-16">
            <h2 class="text-white">Pending Payment</h2>
        </div>
        <div id="main-table" class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-50">
                <thead class="text-xs text-white uppercase bg-teal-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">album</th>
                        <th scope="col" class="px-6 py-3">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b bg-gray-800 border-gray-700" v-for="cart in cartData">
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >{{ cart.album.name }}</td>
                        <td class="px-6 py-4">{{ cart.album.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button type="button" class="mt-7 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " @click.prevent="cart">check out</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Navbar from '../components/Navbar.vue';
export default {
    name: "MyCart",
    methods: {
        ...mapActions(useCounterStore, ["buyCart", "fetchCart"]),
        cart() {
            this.buyCart();
        }
    },
    computed: {
        ...mapState(useCounterStore, ["cartData"])
    },
    created() {
        this.fetchCart();
    },
    components: { Navbar }
}
</script>

<style>

</style>