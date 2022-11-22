<template>
    <div class="text-center row d-flex">
        <ul class=" text-decoration-none">
        <li v-for="(item, index) in store.headerMenu" :key="index">
        <a href="#">{{ item }}</a>
        </li>
        </ul>
    </div>
</template>

<script>
import { store } from "../../store";
    export default {
        name: 'MenuHeader',
        data() {
            return { store, };
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';
</style>