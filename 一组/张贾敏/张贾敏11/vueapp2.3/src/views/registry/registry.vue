<template>
  <div>
    <h1>注册页面</h1>
     <div>
       <el-input v-model="name" placeholder="请输入用户名"></el-input>
     </div>
       <div>
      <el-input placeholder="请输入密码" v-model="pwd" show-password class="el-input"></el-input>
    </div>
     <div>
    <el-button type="primary" @click="registry">注册</el-button>
    </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
      return {
        name:'',
        pwd: ''
      }
    },
    methods:{
     async registry(){
        let {name,pwd}=this;

        let res=await axios.post("/api/registry",{name,pwd})
        console.log(res,"111111111111")
        if(res.data.code===1){
          this.$router.push("/login")
        }

      }
    }
}
</script>

<style>

</style>