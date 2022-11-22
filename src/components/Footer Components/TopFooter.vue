<template>
    <div class="text-center mybg-green">
    <div class="row pt-5 pb-5 container">
        <div class="col-sm-6 col-lg-3">
        <div>
        <img src="/public/img/mobile-light-pet-logo-2x.png" alt="">
        </div>
        <div>
        <p class="pt-4 text-start">1234 Avada Avenue Avadaville<br/>
            info@your-company.com<br/>
            Call us: (1) 234 5678
        </p>
        </div>
        </div>
        <div class="col-sm-6 col-lg-3 ">
            <h5>Shop by brand</h5>
            <ul class="text-start text-white">
            <li v-for="(menuShop, index) in menuShop" :key="index">
            <a :href="menuShop.url">{{ menuShop.text }}</a>
            </li>
            </ul>
        </div>
        <div class="col-sm-6 col-lg-3">
            <h5>Useful links</h5>
            <ul class="text-start">
            <li v-for="(menuLinks, index) in menuLinks" :key="index">
            <a :href="menuLinks.url">{{ menuLinks.text }}</a>
            </li>
            </ul>
        </div>

        <div class="col-sm-6 col-lg-3 bg-footer">
            <h5 class="text-start">Subscribe to our newsletter</h5>
            <form>
  <div class="form-group">
    <input type="email" class="form-control mb-3 classinput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insert your email...*">
  </div>
  <button type="submit" class="btn btn-green btn-lg border-0 w-100">Submit</button>
</form>
        
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'TopFooter',
        data() {
            return {
                menuShop: [
                {
                    text: "Bed",
                    url: "#",
                    current: false,
                },
                {
                    text: "Food",
                    url: "#",
                    current: false,
                },
                {
                    text: "Toys",
                    url: "#",
                    current: false,
                },
                {
                    text: "Transport",
                    url: "#",
                    current: false,
                }
                ],
                menuLinks: [
                {
                    text: "My account",
                    url: "#",
                    current: false,
                },
                {
                    text: "Orders",
                    url: "#",
                    current: true,
                },
                {
                    text: "Checkout",
                    url: "#",
                    current: false,
                },
                {
                    text: "Cart",
                    url: "#",
                    current: true,
                }
                ],
            }
        },  
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

ul{
    a{
        color: white;
        text-decoration: none;

        & :hover{
            color: white;
            opacity:1;
            transition: all 0s linear 0s;
        }
    }
}

.classinput{
    border-radius: 30px;

}

.btn-green{
  background-color: $lightgreen;
  border-radius: 30px;
  color: $white;
}

.bg-footer{
    background: url('/public/img/bg-transparent-3.png') ;
    background-repeat: repeat;
    background-color: #273F29;
    padding: 30px 10px;
}
</style>