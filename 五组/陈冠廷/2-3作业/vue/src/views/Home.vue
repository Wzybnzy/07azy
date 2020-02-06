<template>
    <div class="home">
        <input type="text" placeholder="请输入姓名" v-model="name">
        <input type="text" placeholder="请输入密码" v-model="pwd">
        <p v-if="flag" @click="gotoRegistry">注册</p>
        <button @click="login">登录</button>
         
    </div>
</template>

<script>
import httpAxios from '@/utils/request.js'
import { async } from 'q';
export default {
    data(){
        return {
            name:'',
            pwd:'',
            flag:false
        }
    },
    created(){

    },
    methods:{
        async login(){
            let {name,pwd} = this;
            console.log(name,pwd)
            //bodyName:post请求
            let res= await httpAxios.post('/api/login',{
                name,
                pwd,
                _csrf:document.cookie.split('=')[1]
                })
                console.log(res)
                if(res.data.code==1){//登录成功
                    window.localStorage.name=name;
                    //存储token
                     window.localStorage.token=res.data.token;
                    this.$router.push('/list')
                }else if(res.data.code==2){//没有注册过
                    this.flag=true;
                }

                // let res1 = await axios.get('/getuser?name='+name+'&pwd='+pwd+'&_csrf'+document.cookie.split('=')[1])
                
        },
        async gotoRegistry(){
            this.$router.push('/registry')
        }
    }
}
</script>

<style>
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
