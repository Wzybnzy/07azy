<template>
  <div>
    <input placeholder="请输入用户名" v-model="name"><br>
    <input placeholder="请输入密码" v-model="pwd"><br>
    <button @click="fn">登录</button>
    <p @click="fn1">没有证号，去注册</p>
  </div>
</template>

<script>
import axios from '../untis/request'
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
      let res = await axios.post('/api/login',{name,pwd})
      console.log(res); 
      if(res.data.code==1){
        this.$router.push({name:'wd'})
        window.localStorage.user=JSON.stringify(res.data.data)
      }else if(res.data.code==2){
        alert('该用户还没有注册')
      }
    },
    fn1(){
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
  input{
    width: 200px;
    height: 30px;
    margin-bottom: 10px
  }
</style>
