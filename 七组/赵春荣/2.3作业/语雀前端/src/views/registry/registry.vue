<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model='name'>
    <br/>
     <input type="password" placeholder="请输入密码" v-model='pwd'>
       <br/>
       <button @click='fn'>注册</button>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return{
      name:'',
      pwd:''
    }
  },
  methods: {
    fn(){
      const {name,pwd}=this;
     axios.post('/registry',{
     name,pwd
     }).then(res=>{
       console.log(res.data)
       if(res.data.code===1){
         alert('注册成功')
         this.$router.push('/login')
       }
     })
    }
  },
}
</script>
<style>
  
</style>