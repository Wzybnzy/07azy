<template>
<div class="login">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
 <el-form-item>
    <el-button type="primary" @click="onSubmit">注册</el-button>
  </el-form-item>
  </el-form>
</div>
</template>

<script>
//import { registry } from "@/api/api.js";
import axios from 'axios'
export default {
  data() {
    return {
      form:{
        username:'',
        password:''
      }
    }
  },
  methods: {
    async onSubmit(){
      let {username,password}=this.form
      // let res=await registry({
      //   username,
      //   password
      // })
      let res =await axios.post('/api/registry',{
        username,
        password
      })
      if(res.data.code==1){
        this.$router.go(-1)
      }else {
        this.$message(res.data.msg)
      }
      console.log(res)
    }
  }
}
</script>

<style>

</style>