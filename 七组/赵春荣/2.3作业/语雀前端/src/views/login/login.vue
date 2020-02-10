<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model='name'>
    <br/>
     <input type="password" placeholder="请输入密码" v-model='pwd'>
       <br/>
       <button @click='fn'>登陆</button>
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
     axios.post('/login',{
     name,pwd
     }).then(res=>{
       console.log(res.data)
       if(res.data.code===1){
         alert('登陆成功')
         this.$router.push('/home')
       }else if(res.data.code===3){
         alert('该用户不存在 请注册')
           this.$router.push('/registry')
       }
     })
    }
  },
}
</script>
<style>
  
</style>