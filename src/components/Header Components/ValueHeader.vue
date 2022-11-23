<template>
    <div class="bg-discount">
    <div class="row justify-content-between text-center p-3 align-content-center">
        <div class="col-sm-6 col-lg-4"><p><i class="fa-regular fa-map"></i>
        <strong> International</strong> Shipping Services</p></div>
        <div class="col-sm-6 col-lg-4"><span><i class="fa-regular fa-clock"></i>
        See our <strong>store hours</strong> and services</span></div>
        <div class="col-sm-6 col-lg-4"><span><i class="fa-regular fa-check"></i>
        We price match to give you the <strong> best deals</strong></span></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'ValueHeader',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.bg-discount{
    background: url('/public/img/bg-transparent-3.png');
    background-color: rgba(17,75,95,1);
    background-repeat: repeat;
    color: white;
}
</style>