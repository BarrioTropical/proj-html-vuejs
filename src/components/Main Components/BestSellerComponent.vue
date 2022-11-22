<template>
    <div class="row container pt-5 justify-content-end">
      <div class="col-6 pb-3">
      <h3>All-time best sellers</h3>
      <h2>Items everyone loves</h2>
      </div>
      <div class="col-6"><a class="btn mybutton btn-lg" href="#" role="button">View all products</a></div>
    </div>

    <div class="row justify-content-between text-center container pb-5">
        <div class="col-sm-6 col-lg-3" v-for="(item, index) in store.favouriteProduct">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
        <p>{{item.price}}</p>
        </div>
    </div>
</template>

<script>
import { store } from "../../store";

    export default {
        name: 'BestSellerComponent',
        data(){
            return{
                store,
            };
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';
</style>