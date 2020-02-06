<template>
  <div class="login">
    <div class="cont">
      <p>
        <input type="text" placeholder="请输入用户名" v-model="name" />
      </p>
      <p>
        <input type="text" placeholder="请输入密码" v-model="pwd" />
      </p>
      <p>
        <button @click="login">登录</button>
      </p>
      <div class="mei" @click="goToRegister">没有账号，去注册</div>
    </div>
  </div>
</template>

<script>
import httpAxios from "../utils/request.js";
export default {
  data() {
    return {
      name: "",
      pwd: ""
     
    };
  },
  methods: {
    async login() {
      let { name, pwd } = this;
      let res = await httpAxios.post("/api/login", {
        name,
        pwd,
        _csrf: document.cookie.split("=")[1]
      });
      if (res.data.code == 1) {
        window.localStorage.user = JSON.stringify({...res.data,name});
        this.$router.push("/home/list/zsk");
      } else {
        //没有注册过
        // alert("登录失败");
         this.$message(res.data.mes);
      }
    },
    async goToRegister(){
        this.$router.push('/zc')
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  .cont {
    width: 100%;
    height: 400px;
    margin-top: 100px;
 
    p {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      line-height: 40px;
      text-align: center;
      input {
        width: 230px;
        height: 30px;
        appearance: none;
      }
      button {
        width: 80px;
        height: 40px;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        background-color: blue;
        color: #fff;
        outline: none;
        border: 0;
      }
    }
    .mei {
      width: 100%;
      height: 30px;
      padding-left: 20px;
      margin-top: 20px;
      box-sizing: border-box;
      text-decoration:underline;
    }
  }
}
</style>