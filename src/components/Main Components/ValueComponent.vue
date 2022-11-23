<template>
    <div class="bg-discount pt-4 text-center">
        <div class="row p-3">
        <div class="col-6 col-md-3"><i class="fa-regular fa-truck fa-4x"></i><p>Free worldwide deliveries</p></div>
        <div class="col-6 col-md-3"><i class="fa-regular fa-map fa-4x"></i><p>Find stores near you</p></div>
        <div class="col-6 col-md-3"><i class="fa-regular fa-dollar-sign fa-4x"></i><p>Best prices guarranteed</p></div>
        <div class="col-6 col-md-3"><i class="fa-regular fa-credit-card fa-4x"></i><p>All credit card accepted</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ValueComponent',
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