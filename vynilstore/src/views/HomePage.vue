<template>
    <div>
        <Navbar></Navbar>
        <Cards></Cards>
    </div>
</template>

<script>
import { mapStores, mapActions, mapState } from "pinia";
import Cards from "../components/Cards.vue";
export default {
    methods: {

    },
    computed: {
        
    },
    components: { 
        Navbar,
        Cards 
    }
}
</script>
<style>

</style>