<template>
  <div class="register-page">
    <!-- 注册 -->
    <div class="register-main">
      <h1>注册</h1>
      <div>
        <input type="text" placeholder="请输入用户名" v-model="name" />
      </div>
      <div>
        <input type="text" placeholder="请输入密码" v-model="pwd" />
      </div>
      <div>
        <button @click="register">确定</button>
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
    };
  },
  methods: {
    async register() {
      let { name, pwd } = this;
      let res = await axios.post("/api/register", {
        name,
        pwd,
        _csrf: document.cookie.split("=")[1]
      });
      console.log(res,"resssssssss");
      
      if (res.data.code == 1) {
        //注册成功
        this.$router.push("/login")//进入登录
      } else if(res.data.code==2) {
        //注册失败
        alert("注册失败，请重新注册")
      }
    }
  }
};
</script>

<style>
.register-main {
  width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-main div {
  margin-top: 40px;
}
.register-main div > input {
  width: 400px;
  height: 50px;
  padding-left: 10px;
}
.register-main div > button {
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
