<template>
    <div class="text-center navbar subfooter">
        <ul class=" text-decoration-none text-white">
        <li v-for="(item, index) in store.footerMenu" :key="index">
        <a href="#" class="text-white">{{ item }}</a>
        </li>
        </ul>
    </div>
    <div class="text-center navbar subfooter">
        <ul class=" text-decoration-none text-white">
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-youtube"></i></li>
        </ul>
    </div>
</template>

<script>
import { store } from "../../store";

    export default {
        name: 'SubFooter',
        data() {
            return { store, };
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.subfooter{
    background-color: #1E3120;
    color: white;
}

li {
  float: left;
  padding: 5px;
  color: white;

    a, i{
        text-decoration: none;
        & :hover{
            opacity:1;
            transition: all 0s linear 0s;
        }
    }

}

</style>