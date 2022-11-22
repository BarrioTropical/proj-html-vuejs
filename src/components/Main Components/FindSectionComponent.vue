<template>
    <div class="row">
    <div class="col find-1">
    <div class="text-container">
      <h5 class="pb-4">Find the best animal supplies</h5>
      <h2 class="pb-4">Popular accessories</h2>
      <p><a class="btn mybutton btn-lg" href="#" role="button">View all toys accesories</a></p>
    </div>
    </div>
    <div class="col find-2">
    <div class="text-container">
      <h5 class="pb-4">Find the best animal supplies</h5>
      <h2 class="pb-4">Popular accessories</h2>
      <p><a class="btn mybutton btn-lg" href="#" role="button">View all toys accesories</a></p>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'FindSection',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.find-1{
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/public/img/banner-8-2x.jpg);
  height: 400px;
  background-size: cover;
  text-align: center;
  color: white;
  position: relative;
}

.text-container{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}


.find-2{
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/public/img/banner-9-2x.jpg);
  height: 400px;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
  color: white;
  position: relative;
}

.mybutton{
  background-color: $white;
  border-radius: 30px;

  &:hover{
    background-color: $darkgreen;
    color: $white;
  }
}


</style>