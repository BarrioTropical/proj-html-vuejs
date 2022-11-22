<template>
    <!-- jumbo section -->
    <JumboComponent/>
    <DiscountComponent/>
    <!-- product's category section -->
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
    <!-- food section -->
    <div class="row  text-center pt-5">
        <div class="col-sm-6 col-lg-4  p-3">
        <div class="mybg-green p-4">
        <h2>Kibble</h2>
        <h4>Dry dog food</h4>
        <img src="/public/img/food-transparent-18.png" class="imgFood" alt="">
        <a class="btn btn-lg buttonFood" href="#" role="button">Shop dry food</a>
        </div>
        </div>
        <div class="col-sm-6 col-lg-4  p-3">
        <div class="mybg-green p-4">
        <h2>Moist</h2>
        <h4>Canned dog food</h4>
        <img src="/public/img/food-transparent-17.png" class="imgFood" alt="">
        <a class="btn btn-lg buttonFood" href="#" role="button">Shop moist food</a>
        </div>
        </div>
        <div class="col-sm-6 col-lg-4  p-3">
        <div class="mybg-green p-4">
        <h2>Frozen</h2>
        <h4>Freeze-Dried dog food</h4>
        <img src="/public/img/food-transparent-16.png" class="imgFood" alt="">
        <a class="btn btn-lg buttonFood" href="#" role="button">Shop frozen food</a>
        </div>
        </div>
    </div>



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
@import '../assets/styles/variables';
@import '../assets/styles/generals.scss';

.my-padding{
    padding-top: 100px;
    padding-bottom: 50px;
}

h4{
    color: $lightgreen;
}

.imgFood{
    max-width: 300px;
}

.buttonFood{
    background-color: $lightgreen;
    color:$white;
    border-radius: 30px;
}

</style>