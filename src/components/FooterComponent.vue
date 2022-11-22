<template>
    <!-- top footer section -->
    <TopFooter/>
    <!-- sub footer section -->
    <SubFooter/>
    <!-- copyright section -->
    <div class="copyright p-2 text-center">
        © Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
    </div>
</template>

<script>
import TopFooter from './Footer Components/TopFooter.vue';
import SubFooter from './Footer Components/SubFooter.vue';

    export default {
    name: "FooterComponent",
    components: { TopFooter , SubFooter}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
@import '../assets/styles/generals.scss';
img{
    max-width: 250px;
}

.mybg-green{
    background-color: #1E3120;
}

ul{
    text-decoration: none;
    list-style: none;

    li{
        padding: 5px 0px;
    }

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