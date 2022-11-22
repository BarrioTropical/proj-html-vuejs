<template>
    <div class="bg-discount pt-4 text-center">
        <div class="row">
        <div class="col-6 col-md-3"><i class="fa-regular fa-truck"></i><p>Free worldwide deliveries</p></div>
        <div class="col-6 col-md-3"><i class="fa-regular fa-map"></i><p>Find stores near you</p></div>
        <div class="col-6 col-md-3"><i class="fa-regular fa-dollar-sign"></i><p>Best prices guarranteed</p></div>
        <div class="col-6 col-md-3"><i class="fa-regular fa-credit-card"></i><p>All credit card accepted</p></div>
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
    background-color: rgba(30,49,32,1);
    background-repeat: repeat;
    color: white;
}

</style>