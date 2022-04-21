<template>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a @click.prevent="detail(card.id)" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" :src="card.ImageUrl" alt="" />
            </a>
            <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{card.name}}</h5>
                <h4 class="text-gray-700 text-base mb-4">{{card.artist}}</h4>
                <h4 class="text-gray-700 text-base mb-4">{{card.genre}}</h4>
                <h4 class="text-orange-600 text-base mb-4">{{card.price}}</h4>
                <button @click.prevent="cart(card.id)" type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy this item</button>
            </div>
        </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
    export default {
        name: 'Cards',
        props: ['card'],
        methods: {
            ...mapActions(useCounterStore, ['fetchitem', 'addToCart']),
            detail(id) {
                this.fetchitem(id);
                this.$router.push(`/detail/${id}`);
            },
            cart(id) {
                this.addToCart(id);
            }
        },
        computed: {
            ...mapState(useCounterStore, ['detailData'])
        },
        created() {
            this.fetchitem();
        }
    }
</script>

<style>
</style>