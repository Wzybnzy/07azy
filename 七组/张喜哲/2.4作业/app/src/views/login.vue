<template>
<div class="dl">
    <div class="header">
    
    </div>
      <div class="middle">
        <div class="form">
          用户名 :
          <input type="text" placeholder="请输入你的用户名" v-model="username">
          <br><br>
          密  码 :
          <input type="password" placeholder="请输入密码" v-model="pwd">
          
          <br><br>
          <button @click="login()">登录</button>
          <br>
          <br>
          <a href="/register" v-if="flag">没有账户?请注册</a>
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
      pwd:'',
      flag:false
    }
  },
  methods: {
    back(){
      this.$router.push('/')
    },
    login(){
      axios.post('/login',{
        username:this.username,
        pwd:this.pwd    
        }
        
        ).then(res=>{
            if(res.data.code==0){
              alert(res.data.msg)
              this.flag=true
            }else if(res.data.code == 1){
              localStorage.setItem('username',res.data.data.username)
              alert('登录成功')
              localStorage.setItem('username',res.data.data.username)
              localStorage.setItem('uid',res.data.data.id)
              localStorage.setItem('token',res.data.token)
              this.$router.push('/home')
               this.flag==false
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
 margin: 50px auto;
}
.down{
  width: 100%;
  height: 30px;
  background-color: yellowgreen;
}
a{
  direction: none;
  font-size: 15px;
  color: rgb(18, 63, 145);
}
</style>