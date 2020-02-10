<template>
  <div>
    <el-input v-model="name" placeholder="请输入名字"></el-input>
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
 <el-button type="primary" @click="dl">登陆</el-button>
   <a href="/zc">注册</a>
  </div>
</template>

<script>

import axios from "../../utils/httpAxios"
export default {
  data() {
    return {
      name:"",
      pwd:""
    }
  },
  methods:{
   async dl(){
     let {name,pwd} = this
     let res = await axios.post("/api/login",{name,pwd})
     console.log(res)
     if(res.data.code==1){
        window.localStorage.token = res.data.token;
        window.localStorage.uid = res.data.uid;
       this.$router.push("/home")
     }else{
       alert(res.data.msg)
     }
    }
  }
}
</script>

<style>

</style>