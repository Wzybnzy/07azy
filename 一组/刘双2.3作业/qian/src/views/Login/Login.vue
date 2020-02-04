<template>
  <div class="login">
      <div class="login-box">
        <p><input placeholder="名字" v-model="name"></p>
        <p><input placeholder="密码" v-model="pwd"></p>
        <p><button @click="login">登录</button></p>
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
      console.log('缺少参数')
    }
    let res=await httpAxios.post('/api/login',{name,pwd});
    console.log(res,"00000")
    if(res.data.code==1){
      this.$router.push('/home');
    }else if(res.data.code==0){
      console.log('')
       this.$router.push('/registry');
    }else{
      console.log('登陆失败')
    }
  }
},
}
</script>

<style>

</style>