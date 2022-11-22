<template>
    <div class="bannerNews text-white container mypadding-r">
    <div class="row">
    <div class="col">
      <h2 class="pb-4 text-green">Join our newsletter</h2>
      <h5 class="pb-4 text-green">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</h5>
      <div class="subscription-wrapper">
          <div class="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left subcontainer">
            <form action="#" class="row flex-fill">
              <div class="col-lg-7 my-md-2 my-2">
                <input type="email" class="form-control px-4 border-0 w-100 text-center text-md-left bg-grey" id="email" placeholder="Insert your email ...*" name="email">
              </div>
              <div class="col-lg-5 my-md-2 my-2">
                <button type="submit" class="btn btn-green btn-lg border-0 w-100">Subscribe</button>
              </div>
            </form>
          </div>
        </div>    </div>
    <div class="col"></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Newsletter',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

.bannerNews{
    background: url(/public/img/banner-7-2x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 80vh;
    display: flex;
    align-items: center;
    align-content: center;
    padding: 30px;
}

.text-green{
  color: $darkgreen;
}

.btn-green{
  background-color: $lightgreen;
  border-radius: 30px;
  color: $white;

  &:hover{
    background-color: #2B4F2F;
    color: $white;
  }
}

.bg-grey{
  background-color: $lightgrey;
  line-height: 2.5rem;
  border-radius: 30px;
}

.subcontainer{
  padding: 30px;
  border-radius: 10px;
}


</style>