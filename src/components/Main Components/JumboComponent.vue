<template>
    <div class="jumbotron jumbobg text-white">
    <div class="row">
    <div class="col">
      <h5 class="pb-4">Find the best animal supplies</h5>
      <h2 class="pb-4">We know animals are a part of your family, let us help take care of them.</h2>
      <p><a class="btn mybutton btn-lg" href="#" role="button">Learn more about us</a></p>
    </div>
    <div class="col"></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'JumboComponent'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.jumbobg{
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/public/img/banner-5-2x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 90vh;
    padding: 80px;
    display: flex;
    align-items: center;
    align-content: center;
}

h4{
  text-transform: uppercase;
}

.mybutton{
  background-color: $white;
  border-radius: 30px;
}

</style>