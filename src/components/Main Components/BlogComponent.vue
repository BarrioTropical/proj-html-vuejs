<template>
    <div class="text-center">
    <div class="container my-padding">
    <h2>Get the best tips & tricks</h2>
    <p>Recent articles</p>
    </div>
    <div class="row justify-content-between text-center container">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-1.jpg" alt=""><h5 class="mypadding">How to ‘loose leash walk’ your dog</h5>
            <p>April 21st, 2020</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-2.jpg" alt=""><h5 class="mypadding">Stop cats from scratching furniture</h5><p class="text-left">April 19th, 2020</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-3.jpg" alt=""><h5 class="mypadding">Where to buy the best pet food</h5><p class="text-left">April 18th, 2020</p></div>
        <div class="col-sm-6 col-lg-3"><img src="/public/img/blog-4.jpg" alt=""><h5 class="mypadding">Proper care for your pet toys</h5><p class="text-left">April 17th, 2020</p></div>
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

h2{
    font-size: 30px;
}

.mypadding{
    padding: 10px;
    text-align: left;
}

h5{
    font-size: 1.2rem;
    text-align: left;
}

.text-left{
    text-align: left;
}

</style>