<template>
    <div class="pt-3">
       <!-- Top Header -->
    <div class="row justify-content-between box">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/dark-pet-logo.png" alt=""></div>
        <div class="col-sm-6 col-lg-3">
            <div class="form">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input" placeholder="Search...">
            </div>
        </div>
        <div class="col-sm-6 col-lg-3"><strong>Questions?</strong> Call us: 1.800.123.4567</div>
        <div class="col-sm-6 col-lg-3"><i class="fa fa-bag-shopping"></i> <i class="fa fa-user"></i></div>
    </div>
       <!-- Sub Header -->
    <div class="text-center row d-flex">
        <ul class=" text-decoration-none">
      <li v-for="(item, index) in store.headerMenu" :key="index">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
    </div>

    <!-- values section -->
    <div class="mybg-green">
    <div class="row justify-content-between text-center p-3 align-content-center">
        <div class="col-sm-6 col-lg-4"><p><i class="fa-regular fa-map"></i>
        <strong> International</strong> Shipping Services</p></div>
        <div class="col-sm-6 col-lg-4"><span><i class="fa-regular fa-clock"></i>
        See our <strong>store hours</strong> and services</span></div>
        <div class="col-sm-6 col-lg-4"><span><i class="fa-regular fa-check"></i>
        We price match to give you the <strong> best deals</strong></span></div>
    </div>
    </div>

    </div>
</template>

<script>
import { store } from ".././store";

    export default {
        name: 'HeaderComponent',
        data() {
    return {
      store,
    };
  },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
@import '../assets/styles/generals.scss';

img{
    max-width: 250px;
}


.form{
    position: relative;
}

.form .fa-search{
position: absolute;
top: 20px;
left: 20px;
color: #9ca3af;
}

.form span{
    position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
}

.left-pan{
    padding-left: 7px;
}

.left-pan i{
    padding-left: 10px;
}

.form-input{
    background-color: #F3F4F3;
    text-indent: 33px;
    border-radius: 30px;
}

.form-input:focus{
    box-shadow: none;
    border:none;
}

.mybg-green{
    background-color: #1E3120;
}

li{
    text-decoration: none;
}
</style>