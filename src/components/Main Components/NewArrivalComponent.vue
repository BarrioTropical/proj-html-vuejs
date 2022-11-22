<template>
    <div class="text-center paddingArrival">
    <div class="container text-center ">
    <h2>New products arrival</h2>
    <p>Latest products</p>
    </div>
    <div class="row justify-content-between text-center container ">
        <div class="col-sm-6 col-lg-4" v-for="(item, index) in store.newArrival">
        <img :src="item.image" alt="" >
        <p class="italic">{{item.title}}</p>
        <p class="price"><span>{{item.discount}}</span>{{item.price}}</p>
        </div>
    </div>
    </div>
</template>

<script>
import { store } from "../../store";

    export default {
        name: 'NewArrival',
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

.paddingArrival{
    padding: 100px 0px;
}

.italic{
    font-style: italic;
    font-weight: 500;
}
.price{
    color: $lightgreen;
    font-size: 20px;

    span{
        color: $black;
        text-decoration:line-through;
        font-size: 16px;
    }
}

</style>