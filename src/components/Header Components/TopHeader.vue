<template>
    <div class="pt-3">
    <div class="row justify-content-between box">
        <div class="col-sm-6 col-lg-3"><img src="/public/img/dark-pet-logo.png" alt=""></div>
        <div class="col-sm-6 col-lg-3">
            <div class="form">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input" placeholder="Search...">
            </div>
        </div>
        <div class="col-sm-6 col-lg-3"><strong>Questions?</strong> Call us: 1.800.123.4567</div>
        <div class="col-sm-6 col-lg-3"><i class="fa fa-bag-shopping"></i> <i class="fa fa-user"></i></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'TopHeader',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/generals.scss';

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

img{
    max-width: 250px;
}
</style>