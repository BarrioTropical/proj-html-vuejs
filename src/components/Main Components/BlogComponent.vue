<template>
    <div class="text-center">
    <div class="container text-center my-padding">
    <h2>Get the best tips & tricks</h2>
    <p>Recent articles</p>
    </div>
    <div class="row justify-content-between text-center container">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-1.jpg" alt=""><p>How to ‘loose leash walk’ your dog</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-2.jpg" alt=""><p>Stop cats from scratching furniture</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-3.jpg" alt=""><p>Where to buy the best pet food</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-4.jpg" alt=""><p>Proper care for your pet toys</p></div>
    </div>
    <div><a class="btn btn-lg buttonFood" href="#" role="button">Read all articles</a></div>
    </div>
</template>

<script>
    export default {
        name: 'BlogComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';
</style>