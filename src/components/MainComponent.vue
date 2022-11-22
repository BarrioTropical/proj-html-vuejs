<template>
    <!-- fixed section -->
    <div class="sticky-box">
    <section class="prebuilts">
        <i class="fa-brands fa-wordpress"></i>
        <p><strong>Prebuilts</strong></p>
    </section>

    <section class="price">
      <p class="greenSale">$ 45</p>
      <p><strong>Sale</strong></p>
    </section>
  </div>


    <!-- jumbo section -->
    <JumboComponent/>
    <DiscountComponent/>
    
    <!-- product's category section -->
    <CategoryComponent/>
    
    <!-- food section -->
    <FoodComponent/>

    <!-- banner section -->
    <BannerComponent/>

    <!-- best sellers section -->
    <BestSellerComponent/>

    <!-- testimonial section -->
    <TestimonialComponent/>

    <!-- newsletter section -->
    <Newsletter/>

    <!-- blog section -->
    <BlogComponent/>
    
    <!-- find section -->
    <FindSectionComponent/>
    
    <!-- value section -->
    <ValueComponent/>
    
    <!-- new arrival section -->
    <NewArrival/>
</template>

<script>
import CategoryComponent from './Main Components/CategoryComponent.vue';
import DiscountComponent from './Main Components/DiscountComponent.vue';
import JumboComponent from './Main Components/JumboComponent.vue';
import FoodComponent from './Main Components/FoodComponent.vue';
import BannerComponent from './Main Components/BannerComponent.vue';
import BestSellerComponent from './Main Components/BestSellerComponent.vue';
import TestimonialComponent from './Main Components/TestimonialComponent.vue';
import Newsletter from './Main Components/NewsletterComponent.vue';
import BlogComponent from './Main Components/BlogComponent.vue';
import FindSectionComponent from './Main Components/FindSectionComponent.vue';
import ValueComponent from './Main Components/ValueComponent.vue';
import NewArrival from './Main Components/NewArrivalComponent.vue';


    export default {
    name: "MainComponent",
    components: {
    JumboComponent,
    DiscountComponent,
    CategoryComponent,
    FoodComponent,
    BannerComponent,
    BestSellerComponent,
    TestimonialComponent,
    Newsletter,
    BlogComponent,
    FindSectionComponent,
    ValueComponent,
    NewArrival
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
@import '../assets/styles/generals.scss';

.sticky-box {
  position: fixed;
  top: 300px;
  right: 10px;
}

p{
  margin-bottom: 0;
}

.prebuilts {
  height: 60px;
  width: 60px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: white;
  margin-bottom: 10px;
  font-size: 12px;
}
.price {
  height: 60px;
  width: 60px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: white;
}

.greenSale {
  color: #5BB164;
  font-weight: 700;
}



</style>