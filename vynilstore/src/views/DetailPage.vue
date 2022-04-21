<template>
<Navbar></Navbar>
    <div class="min-h-screen bg-base-200 container">
        <div class="mt-10 ml-5">
            <img :src="detailData.images" class="max-w-sm rounded-lg shadow-2xl" />
            <a class="items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-12 rounded-full" :href="detailData.spotifyUrl" target="_blank">Listen this album on Spotify</a>
            <div>
                <h1 class="text-5xl text-center text-white font-bold">{{ detailData.name }}</h1>
                <h6 class="text-center text-2xl text-white font-bold">{{ detailData.artist }}</h6>
                <h6 class="text-center text-xl text-white">{{ detailData.genre }}</h6>
                <h4 class="text-center text-2xl text-orange-600 font-bold">Rp. {{ detailData.price }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores, mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";
export default {
    name: "Details",
    methods: {
        ...mapActions(useCounterStore, ["fetchitem"])
    },
    computed: {
        ...mapState(useCounterStore, ["detailData"])
    },
    created() {
        this.fetchitem();
    },
    components: { Navbar }
}
</script>

<style>
</style>