<template>
    <!-- jumbo section -->
    <JumboComponent/>
    <DiscountComponent/>
    <!-- product's category section -->
    <div class="container p-4 text-center">
    <h3>Browse by category</h3>
    <p>Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae interdum eleifend dui, consequat nulla rhoncus dictum. Viverra.</p>
    </div>
    <div class="row justify-content-between text-center">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-9.jpg" alt=""><p>Bed (1)</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-3.jpg" alt=""><p>Food (6)</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-2.jpg" alt=""><p>Toys (6)</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-4.jpg" alt=""><p>Transport (6)</p></div>
    </div>
    <!-- food section -->
    <!-- banner section -->
    <!-- best sellers section -->
    <!-- testimonial section -->
    <!-- newsletter section -->
    <!-- blog section -->
    <!-- find section -->
    <!-- value section -->
    <!-- new arrival section -->
</template>

<script>
import DiscountComponent from './DiscountComponent.vue';
import JumboComponent from './JumboComponent.vue';

    export default {
    name: "MainComponent",
    components: { JumboComponent, DiscountComponent }
}
</script>

<style lang="scss" scoped>
img{
    max-width: 300px;
}
</style>