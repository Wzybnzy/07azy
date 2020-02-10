<template>
  <div>
    <h1>登录页面</h1>
     <div>
       <el-input v-model="name" placeholder="请输入用户名"></el-input>
     </div>
       <div>
      <el-input placeholder="请输入密码" v-model="pwd" show-password class="el-input"></el-input>
    </div>
     <div>
      <el-button type="primary" @click="login">登陆</el-button>
         <p v-if="ppp" style="color:red">登陆失败</p>
    </div>
     <div>
      <el-button v-if="flag" class="css-unify" @click="goRegistry">点击注册</el-button>
    </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
      return {
        name:'',
        pwd: '',
        flag:false,
        ppp:false
      }
    },
    methods:{
     async login(){
        let {name,pwd}=this;

        let res=await axios.post("/api/login",{name,pwd})
        console.log(res.data,"111111111111")
        // this.$router.push("/home/knowbook")
        if(res.data.code===1){
             window.localStorage.token=res.data.data.token;
           window.localStorage.uid=res.data.data.uid;
          this.$router.push("/home/knowbook")
        }else {
         this.ppp=true
         this.flag=true
        }

      },
      goRegistry(){
        this.$router.push('/registry')
      }
    }
}
</script>

<style>

</style>