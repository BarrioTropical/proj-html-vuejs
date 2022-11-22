<template>
    <div class="p-5 text-center bg-image banner-new container">
    <div>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h5 class="mb-3">Find the best animal supplies</h5>
          <h2 class="mb-3">New arrivals weekly</h2>
          <a class="btn mybutton btn-lg" href="#" role="button">Learn more about us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'BannerComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.banner-new{
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/public/img/banner-3-2x-scaled.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50vh;
  padding: 80px;
  display: flex;
  align-items: center;
  align-content: center;

    h5{
      text-transform: uppercase;
    }

    a{
      background-color: $white;
      color: $black;
      border-radius: 30px;
    }

}


.mybutton{
  background-color: $white;
  border-radius: 30px;

  &:hover{
    background-color: $lightgreen;
    color: $white;
  }
}
</style>