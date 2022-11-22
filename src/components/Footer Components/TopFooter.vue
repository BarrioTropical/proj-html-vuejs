<template>
    <div class="row mybg-green pt-5 pb-5 text-center">
        <div class="col-sm-6 col-lg-3">
        <div>
        <img src="/public/img/mobile-light-pet-logo-2x.png" alt="">
        </div>
        <div>
        <p class="pt-4">1234 Avada Avenue Avadaville<br/>
            info@your-company.com<br/>
            Call us: (1) 234 5678
        </p>
        </div>
        </div>
        <div class="col-sm-6 col-lg-3">
            <h2>Shop by brand</h2>
            <ul>
            <li v-for="(menuShop, index) in menuShop" :key="index">
            <a :href="menuShop.url">{{ menuShop.text }}</a>
            </li>
            </ul>
        </div>
        <div class="col-sm-6 col-lg-3">
            <h2>Useful links</h2>
            <ul>
            <li v-for="(menuLinks, index) in menuLinks" :key="index">
            <a :href="menuLinks.url">{{ menuLinks.text }}</a>
            </li>
            </ul>
        </div>

        <div class="col-sm-6 col-lg-3">Newsletter section</div>
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
</style>