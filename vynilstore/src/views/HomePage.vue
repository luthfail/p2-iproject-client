<template>
<Navbar></Navbar>
    <div class="pl-12 py-14 grid grid-cols-3 gap-1.5 w-full p-2">
        <Cards
        v-for="card in albumsData"
        :key="card.id"
        v-bind:card="card"
        ></Cards>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import Cards from "../components/Cards.vue";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";
export default {
    name: 'HomePage',
    methods: {
        ...mapActions(useCounterStore, ["fetchData"])
    },
    computed: {
        ...mapState(useCounterStore, ["albumsData"])
    },
    created() {
        this.fetchData()
    },
    components: {
    Cards,
    Navbar
}
}
</script>
<style>

</style>