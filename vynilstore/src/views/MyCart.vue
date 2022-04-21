<template>
    <div>
        <div class="text-2xl text-center m-16">
            <h2>Pending Payment</h2>
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
                    <tr class="border-b bg-gray-800 border-gray-700" v-for="history in historyData">
                        <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >{{ cartData.album.name }}</td>
                        <td class="px-6 py-4">{{ cartData.album.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click.prevent="cart"></button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    name: 'MyCart',
    methods: {
        ...mapActions(useCounterStore, ['buyCart', 'readCart']),
        cart() {
            this.buyCart();
        }
    },
    computed: {
        ...mapState(useCounterStore, ['cartData'])
    },
    created() {
        this.readCart();
    }
}
</script>

<style>

</style>