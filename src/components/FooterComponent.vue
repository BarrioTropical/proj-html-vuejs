<template>
    <!-- top footer section -->
    <div class="row mybg-green pt-5 pb-5">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/mobile-light-pet-logo-2x.png" alt=""></div>
        <div class="col-sm-6 col-lg-3">
            <h3>Shop by brand</h3>
            <ul>
            <li v-for="(menuShop, index) in menuShop" :key="index">
            <a :href="menuShop.url">{{ menuShop.text }}</a>
            </li>
            </ul>
        </div>
        <div class="col-sm-6 col-lg-3">
            <h3>Useful links</h3>
            <ul>
            <li v-for="(menuLinks, index) in menuLinks" :key="index">
            <a :href="menuLinks.url">{{ menuLinks.text }}</a>
            </li>
            </ul>
        </div>

        <div class="col-sm-6 col-lg-3">Newsletter section</div>
    </div>
    <!-- sub footer section -->
    <div class=" text-center">
        Menu section and social
    </div>
    <!-- copyright section -->
    <div class="copyright p-2 text-center">
        © Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
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
@import "../assets/styles/generals.scss";
img{
    max-width: 250px;
}

.mybg-green{
    background-color: #1E3120;
}

ul{
    text-decoration: none;

    a{
        color: white;
        text-decoration: none;
    }
}

.copyright{
    background-color: black;
    color: white;
}

</style>