<template>
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
    <ValueHeader/>
    
    <!-- new arrival section -->
    <NewArrivalComponent/>
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
import ValueHeader from './Header Components/ValueHeader.vue';


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
      ValueHeader, 
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
@import '../assets/styles/generals.scss';

.find-1{
  background-image: url(/public/img/banner-8-2x.jpg);
  height: 400px;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
  color: white;
  margin: 0 auto;
}


.my-padding{
    padding-top: 100px;
    padding-bottom: 50px;
}

.banner-new{
  background-image: url(/public/img/banner-3-2x-scaled.jpg);
  height: 400px;
  background-size: cover;
  vertical-align: middle;
}
.mybg{
    background: url(/public/img/banner-7-2x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 60vh;
    padding: 60px;
}

.text-green{
  color: $darkgreen;
}

.mypadding-r{
  margin-top: -30px;
}

.mask{
background-color: rgba(0, 0, 0, 0.6);
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

.mybutton{
  background-color: $white;
  border-radius: 30px;
}

</style>