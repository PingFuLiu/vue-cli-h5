<template>
    <div class='main'>
        <div class="wrap index">
            <h1>{{ msg }}</h1>
            <div class="logo">
                <img src='../../images/logo.png' alt=''>
            </div>
            <a href="javascript:;" @click='toLogin'>跳转登录页</a>
        </div>
        <div class="wrap index">
            <h1>{{ msg }}</h1>
            <div class="logo">
                <img src='../../images/logo.png' alt=''>
            </div>
            <a href="javascript:;" @click='toLogin'>跳转登录页</a>
        </div>
        <div class="wrap index">
            <h1>{{ msg }}</h1>
            <div class="logo">
                <img src='../../images/logo.png' alt=''>
            </div>
            <a href="javascript:;" @click='toLogin'>跳转登录页</a>
        </div>
        <div class="wrap index">
            <h1>{{ msg }}</h1>
            <div class="logo">
                <img src='../../images/logo.png' alt=''>
            </div>
            <a href="javascript:;" @click='toLogin'>跳转登录页</a>
        </div>
         <div class="wrap index">
            <h1>{{ msg }}</h1>
            <div class="logo">
                <img src='../../images/logo.png' alt=''>
            </div>
            <a href="javascript:;" @click='toLogin'>跳转登录页</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return {
            msg: '这是首页',
        }
    },
    methods: {
        toLogin(){
            this.$router.push({path: '/login'})
        }
    },
    mounted() {
        // this.$root.Ajax({//axios请求
        //     type: 'post',
        //     key: 'index',
        //     success: function(data){
                
        //     },
        // });
    },
}
</script>

<style scoped lang='scss'>  
.main{
    .index{
        h1{
            width: 3.75rem;//rem
            color:red;
            font-size: 24px;//文字px
            text-align: center;
        }
        .logo{
            display: flex;
            justify-content: center;
            img{
                width: 1rem;
                height: 1rem;
            }
        }
        a{
            color: $red;
            font-size: 24px;
            display: block;
            text-align: center;
        }
    }
}
</style>

