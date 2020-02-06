<template>
  <div class="about">
    <input placeholder="请输入用户名" v-model="name"><br>
    <input placeholder="请输入密码" v-model="pwd"><br>
    <button @click="fn">注册</button>
  </div>
</template>

<script>
import {register} from '@/api/api.js'
export default {
  data(){
    return {
      name:'',
      pwd:''
    }
  },
  methods:{
    async fn(){
      let {name,pwd} = this
      console.log(name,pwd);
      let res = await register({name,pwd})
      console.log(res);
      if(res.data.code==1){
        this.$router.go(-1)
      }else {
        this.$message(res.data.mes)
      }
    }
  }
}
</script>

<style scoped>
  input{
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
</style>