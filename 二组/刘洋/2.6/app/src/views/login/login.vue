<template>
  <div class="login">
      <el-input v-model="name" placeholder="请输入用户名"></el-input>
        <el-input v-model="pwd" placeholder="请输入密码"></el-input>
         <el-button @click="tologin">登陆</el-button>
          <el-button @click="toregister">注册</el-button>
  </div>
</template>

<script>
import httpAxios from '../../utils/request'
export default {
        data() {
            return {
                name:"",
                pwd:""
            }
        },
    methods:{
       async tologin(){
           let {name,pwd}=this
          let res=await  httpAxios.post("/api/login",{name,pwd})
          console.log(res)
          if(res.data.code==1){
              this.$router.push("/index")
              localStorage.token=res.data.token
              localStorage.uid=res.data.uid
              localStorage.name=res.data.name
          }else{
              alert(res.data.msg);
          }
        },
        async toregister(){
             this.$router.push("/register")
        }
    }
}
</script>

<style>

</style>