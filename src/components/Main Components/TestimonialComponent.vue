<template>
    <div class="bg-discount p-5">
    <div class="container text-center my-padding text-center">
    <h2>Users testimonials</h2>
    <div class="row justify-content-between text-center container pt-5 pb-5">
        <div class="col-sm-6 col-lg-4 p-3"><img src="/public/img/avatar-3.jpg" alt="" class="m-3">
        <p>Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.</p>
        <p class="opacity-50">Lisa Smith, ThemeFusion</p>
        </div>
        <div class="col-sm-6 col-lg-4 p-3"><img src="/public/img/avatar-1.jpg" alt="" class="m-3">
        <p>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.</p>
        <p class="opacity-50">Melissa Green, ThemeFusion</p>
        </div>
        <div class="col-sm-6 col-lg-4 p-3"><img src="/public/img/avatar-4.jpg" alt="" class="m-3">
        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.</p>
        <p class="opacity-50">Sam Lewis, ThemeFusion</p>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'TestimonialComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

img{
    border-radius: 50%;
    max-width: 100px;
}

p{
    line-height: 1.5rem;
}

.bg-discount{
    background: url('/public/img/bg-transparent-3.png');
    background-color: rgba(17,75,95,1);
    background-repeat: repeat;
    color: white;
}

</style>