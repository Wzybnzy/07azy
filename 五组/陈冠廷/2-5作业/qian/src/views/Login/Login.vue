<template>
  <div class="login">
      <div class="login-box">
        <p><input placeholder="名字" v-model="name"></p>
        <p><input placeholder="密码" v-model="pwd"></p>
        <!-- <button><button @click="login">登录</button></p> -->
         <el-button :plain="true" @click="login">登录</el-button>
      </div>
  </div>
</template>

<script>
import httpAxios from '../../utils/request';

export default {
data(){
  return {
    name:'',
    pwd:''
  }
},
methods: {
  async login(){
    let {name,pwd}=this;
    if(!name||!pwd){
      this.$message('缺少参数');
      return;
    }
    let res=await httpAxios.post('/api/login',{name,pwd});
    // console.log(res,"00000")
    if(res.data.code==1){
           window.localStorage.token=res.data.data.token;
           window.localStorage.name=res.data.data.name;
           window.localStorage.uid=res.data.data.uid;
      this.$router.push('/home');
    }else if(res.data.code==0){
      // console.log('')
       this.$router.push('/registry');
    }else{
       this.$message('登陆失败');
    }
  }
},
}
</script>

<style>

</style>