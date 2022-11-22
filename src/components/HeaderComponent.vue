<template>
       <!-- Top Header -->
    <TopHeader/>
       <!-- Sub Header -->
    <MenuHeader/>
        <!-- values section -->
    <ValueHeader/>

</template>

<script>
import TopHeader from './Header Components/TopHeader.vue';
import MenuHeader from './Header Components/MenuHeader.vue';
import ValueHeader from './Header Components/ValueHeader.vue';


    export default {
        name: 'HeaderComponent',
        components: { TopHeader, MenuHeader, ValueHeader },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
@import '../assets/styles/generals.scss';

.mybg-green{
    background-color: #1E3120;
}

li{
    text-decoration: none;
}
</style>