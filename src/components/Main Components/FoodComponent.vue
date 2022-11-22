<template>
    <div class="row  text-center pt-5 container pb-5">
        <div class="col-sm-6 col-lg-4  p-3">
        <div class="mybg-green p-5 align-items-center">
        <h2>Kibble</h2>
        <h4>Dry dog food</h4>
        <img src="/public/img/food-transparent-18.png" class="imgFood" alt="">
        <a class="btn btn-lg buttonFood" href="#" role="button">Shop dry food</a>
        </div>
        </div>
        <div class="col-sm-6 col-lg-4  p-3">
        <div class="mybg-green p-5">
        <h2>Moist</h2>
        <h4>Canned dog food</h4>
        <img src="/public/img/food-transparent-17.png" class="imgFood" alt="">
        <a class="btn btn-lg buttonFood" href="#" role="button">Shop moist food</a>
        </div>
        </div>
        <div class="col-sm-6 col-lg-4  p-3">
        <div class="mybg-green p-5">
        <h2>Frozen</h2>
        <h4>Freeze-Dried dog food</h4>
        <img src="/public/img/food-transparent-16.png" class="imgFood" alt="">
        <a class="btn btn-lg buttonFood" href="#" role="button">Shop frozen food</a>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FoodComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

h4{
    color: $lightgreen;
}

.buttonFood{
    background-color: $lightgreen;
    color:$white;
    border-radius: 30px;
}
</style>