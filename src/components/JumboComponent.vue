<template>
    <div class="jumbotron mybg text-white">
  <h1 class="display-4">FIND THE BEST ANIMAL SUPPLIES</h1>
  <p class="lead">We know animals are a part of your family, let us help take care of them.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more about us</a>
  </p>
</div>
</template>

<script>
    export default {
        name: 'JumboComponent'
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";

.mybg{
    background: url(/public/img/banner-5-2x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}


</style>