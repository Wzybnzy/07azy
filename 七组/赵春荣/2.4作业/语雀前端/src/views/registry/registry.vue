<template>
  <div class='registry'>
     <el-input v-model="name" placeholder="请输入内容" class="input"></el-input>
    <br/>
    <el-input placeholder="请输入密码" v-model="pwd" show-password class="input"></el-input>
     <el-button type="primary" @click='fn'>注册</el-button> 
  </div>
</template>
<script>
import axios from "axios"
import {registry} from "../../api/api"
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
    registry({
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
  .registry{

    width:100%;
    height:300px;
    border:1px solid #ccc;
    margin:60 auto;
  }
  .registry .input{
   margin:20px;
  }

</style>