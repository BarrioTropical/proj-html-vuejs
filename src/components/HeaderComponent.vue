<template>
    <div class="container pt-3 pb-3">
       <!-- Top Header -->
    <div class="row justify-content-between">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/dark-pet-logo.png" alt=""></div>
        <div class="col-sm-6 col-lg-3">
            <div class="form">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input" placeholder="Search...">
            </div>
        </div>
        <div class="col-sm-6 col-lg-3"><strong>Questions?</strong> Call us: 1.800.123.4567</div>
        <div class="col-sm-6 col-lg-3">user section</div>
    </div>
       <!-- Sub Header -->
    <div class="text-center">
        Menu section
    </div>

    <!-- values section -->
    <div class="row justify-content-between text-center">
        <div class="col-sm-6 col-lg-3"><span>International Shipping Services</span></div>
        <div class="col-sm-6 col-lg-3"><span>International Shipping Services</span></div>
        <div class="col-sm-6 col-lg-3"><span>International Shipping Services</span></div>
    </div>

    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";
img{
    max-width: 250px;
}


.form{
    position: relative;
}

.form .fa-search{
position: absolute;
top: 20px;
left: 20px;
color: #9ca3af;
}

.form span{
    position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
}

.left-pan{
    padding-left: 7px;
}

.left-pan i{
    padding-left: 10px;
}

.form-input{
    background-color: #F3F4F3;
    text-indent: 33px;
    border-radius: 30px;
}

.form-input:focus{
    box-shadow: none;
    border:none;
}

.mybg-green{
    background-color: #1E3120;
}
</style>