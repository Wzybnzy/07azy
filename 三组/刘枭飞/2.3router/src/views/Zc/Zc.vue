<template>
  <div>
    <input type="text" v-model="name">
    <input type="password" v-model="pwd">
    <button @click="dl">注册</button><a href="/login">登陆</a>
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
     let res = await axios.post("/api/zc",{name,pwd})
     console.log(res)
     if(res.data.code==1){
       this.$router.push("/login")
     }else{
       alert(res.data.msg)
     }
    }
  }
}
</script>

<style>

</style>