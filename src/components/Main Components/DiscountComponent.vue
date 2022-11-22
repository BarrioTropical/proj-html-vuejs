<template>
    <div class="mybg-green pt-4 text-center">
        <div class="row">
        <div class="col-6 col-md-4"><img src="/public/img/food-transparent-5.png" alt=""></div>
         <div class="col-6 col-md-4">Get $25 OFF your first purchase of our homemade pet food! </div>
        <div class="col-6 col-md-4">
        <a href="#">Visit the shop</a></div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'DiscountComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';
.row{
    text-align: center;
    align-items: center;
}
a{
    color: $white;
}

img{
    max-width: 200px;
}

</style>