<template>
    <div class="min-h-screen bg-base-200">
        <div class="ml-96 mt-16">
            <img :src="detailData.images" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl ml-10 text-white font-bold">{{ detailData.name }}</h1>
                <h4 class="ml-28 text-2xl text-orange-600 font-bold">{{ detailData.price }}</h4>
                <h6 class="ml-10 text-5xl text-white font-bold">{{ detailData.artist }}</h6>
                <h6 class="mb-5 ml-36 text-xl text-white">{{ detailData.genre }}</h6>
                <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-12 rounded-full" :href="detailData.spotifyUrl" target="_blank">Listen this album on spotify</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores, mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
    name: 'Details',
    methods: {
        ...mapActions(useCounterStore, ["fetchitem"])
    },
    computed: {
        ...mapState(useCounterStore, ["detailData"])
    },
    created() {
        this.fetchitem();
    }
}
</script>

<style>
</style>