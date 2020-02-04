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
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <p :class="{'active':show}" @click="goToRegistry">注册</p></el-form-item>
  </el-form>
</div>
</template>

<script>
import {login} from '@/api/api.js'
export default {
  data() {
    return {
      form:{
        username:'',
        password:''
      },
      show:false
    }
  },
  methods: {
    async onSubmit(){
      let {username,password}=this.form
      let res=await login({
        username,
        password
      })
      if(res.data.code==1){
        this.$router.push({name:'file'})
        window.localStorage.user=JSON.stringify(res.data.data)
      }else {
        this.show=true
        this.$message(res.data.msg)
      }
      console.log(res)
    },
    goToRegistry(){
      this.$router.push({
        path:'/registry'
      });
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>