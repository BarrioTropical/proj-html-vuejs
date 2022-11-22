<template>
    <div class="text-center">
    <div class="container text-center my-padding">
    <h2>Browse by category</h2>
    <p>Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae<br/> interdum eleifend dui, consequat nulla rhoncus dictum. Viverra.</p>
    </div>
    <div class="row justify-content-between text-center container">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-9.jpg" alt=""><p>Bed (1)</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-3.jpg" alt=""><p>Food (6)</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-2.jpg" alt=""><p>Toys (6)</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-4.jpg" alt=""><p>Transport (6)</p></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'CategoryComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.my-padding{
    padding-top: 100px;
    padding-bottom: 50px;
}
</style>