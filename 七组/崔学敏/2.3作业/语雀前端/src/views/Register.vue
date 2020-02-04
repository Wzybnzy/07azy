<template>
  <div class="reg">
      <div class="cont">
      <p>
          <input type="text" placeholder="请输入用户名" v-model="name"/>
      </p>
      <p>
          <input type="text" placeholder="请输入密码" v-model="pwd"/>
      </p>
      <p>
          <button @click="registry">注册</button>
      </p>
      <div class="mei" @click="goToLogin">
          已有账号，去登录
      </div>
  </div>
  </div>
</template>

<script>
import httpAxios from "../utils/request.js";

export default {
data(){
    return {
        name:'',
        pwd:''
    }
},
methods:{
    async registry(){
        let {name,pwd}=this;
        let res=await httpAxios.post('/api/register',{name,pwd,_csrf: document.cookie.split("=")[1]});
        if(res.data.code==1){
            this.$router.push('/home/list')
        }else{
    alert('注册失败')
        }
    },
    async goToLogin(){
        this.$router.push('/deng')
    }
}
}
</script>

<style lang="scss">
.reg{
    width:100%;
    height:100%;
    .cont{
        width:100%;
        height:400px;
        margin-top: 100px;
        background-color: #ccc;
        p{
            width:100%;
            height:40px;
            line-height: 40px;
            margin-top: 20px;
            text-align: center;
            input{
                width:230px;
                height:30px;
                appearance: none;
            }
            button{
                width:80px;
                height:40px;
                font-size: 16px;
                text-align: center;
                line-height: 40px;
                background-color: blue;
                color: #fff;
                outline: none;
                border:0;
            }
        }
        .mei{
            width:100%;
            height:30px;
            padding-left:20px;
            margin-top: 20px;
            box-sizing: border-box;
        }
    }
}
</style>