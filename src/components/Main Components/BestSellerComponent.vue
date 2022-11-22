<template>
    <div class="row container pt-5 justify-content-end">
      <div class="col-6 pb-3">
      <h3>All-time best sellers</h3>
      <h2>Items everyone loves</h2>
      </div>
      <div class="col-6"><a class="btn mybutton btn-lg" href="#" role="button">View all products</a></div>
    </div>

    <div class="row justify-content-between text-center container pb-5">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-21.jpg" alt=""><p>Transport cage</p><p>$25.00</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-20.jpg" alt=""><p>Dog leash</p><p>$25.00</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-16.jpg" alt=""><p>Animal transport cage</p><p>$25.00</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/product-11.jpg" alt=""><p>Colorful cat leash</p><p>$12.00</p></div>
    </div>
</template>

<script>
    export default {
        name: 'BestSellerComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';
</style>