<template>
  <div class='login'>
    <el-input v-model="name" placeholder="请输入内容" class="input"></el-input>
    <br/>
    <el-input placeholder="请输入密码" v-model="pwd" show-password class="input"></el-input>
     <el-button type="primary" @click='fn'>登陆</el-button>
       <el-button type="danger" plain v-if='show' @click='gotoregistry'>注册</el-button>
    </div>
</template>
<script>
import axios from "axios"

export default {
  data(){
    return{
      name:'',
      pwd:'',
      show:false
    }
  },
  methods: {
    fn(){
      const {name,pwd,show}=this; 
    axios.post('/login',{
      name,pwd
    }).then(res=>{
       console.log(res.data)
       if(res.data.code===1){
         alert('登陆成功')
          window.localStorage.token=res.data.token;
         window.localStorage.id=res.data.uid
         this.$router.push('/home/list/file')
        
       }else if(res.data.code===3){
          this.show=true;
         alert('该用户不存在 请注册');
       }
     })
    },
    gotoregistry(){
      this.$router.push('/registry')
    }
  },
}
</script>
<style scoped>
  .login{
    width:100%;
    height:300px;
    border:1px solid #ccc;
    margin:60 auto;
  }
  .login .input{
   margin:20px;
  }
</style>