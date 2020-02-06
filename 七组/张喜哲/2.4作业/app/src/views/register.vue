<template>
<div class="dl">
    <div class="header">
      <b @click="back()"><</b>
    </div>
      <div class="middle">
        <div class="form">
          用户名 :
          <input type="text" placeholder="请输入你的用户名" v-model="username">
          <br><br>
          密  码 :
          <input type="password" placeholder="请输入密码" v-model="pwd">
          
          <br><br>
          <button @click="register()">注册</button>
      </div>
      </div>
      <div class="down"></div>
</div>
 
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      username:"",
      pwd:''
    }
  },
  methods: {
    back(){
      this.$router.push('/')
    },
    register(){
      axios.post('/register',{
        username:this.username,
        pwd:this.pwd
      }).then(res=>{
          if(res.data.code==1){
            alert('注册成功')
            this.$router.push('/')
          }else if(res.data.code==0){
            alert(res.data.msg)
          }
      })
    }
  },
}
</script>

<style>
body,html,#app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.dl{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 30px;
  background-color: yellowgreen;
  line-height: 30px;
}
.header>b{
  float: left;
  margin-left: 10px;
  color: white;
  font-size: 20px;
}
.middle{
  width: 100%;
  flex:1;

}
.form{
  width: 300px;
  margin: 30px auto;
}
.down{
  width: 100%;
  height: 30px;
  background-color: yellowgreen;
}
</style>