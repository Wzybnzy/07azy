<template>
  <div class="login-page">
    <!-- 登录 -->
    <div class="login-main">
      <h1>登录</h1>
      <div>
        <input type="text" placeholder="请输入用户名" v-model="name" />
      </div>
      <div>
        <input type="text" placeholder="请输入密码" v-model="pwd" />
      </div>
      <div>
        <button @click="login">登录</button>
      </div>
      <div>
        <p v-if="regflg">
          没有账号，去
          <span class="reg" @click="reg">注册</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      regflg: false
    };
  },
  methods: {
    async login() {
      let { name, pwd } = this;
      let res = await axios.post("/api/login", {
        name,
        pwd,
        _csrf: document.cookie.split("=")[1]
      });      
      if (res.data.code == 1) {
        //登录成功
        this.$router.push("/home")//进入主页面
        //保存uid和token到本地 保存用户信息到本地
        window.localStorage.user=JSON.stringify(res.data)
      } else if(res.data.code==2) {
        //登录失败
        alert("没有该用户请注册")
        this.regflg = true;
      }
    },
    reg(){
      this.$router.push('/register')
    }
  }
};
</script>

<style>
.login-main {
  width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-main div {
  margin-top: 40px;
}
.login-main div > input {
  width: 400px;
  height: 50px;
  padding-left: 10px;
}
.login-main div > button {
  width: 100px;
  height: 35px;
  padding: 5 10px;
  background: rgb(59, 104, 222);
  color: #fff;
  border: 0;
  outline: 0;
}
.reg {
  color: blue;
  cursor: pointer;
}
</style>
