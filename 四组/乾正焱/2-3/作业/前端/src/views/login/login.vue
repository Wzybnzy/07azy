<template>
  <div class="login">
    <div class="box">
      <p>
        <input type="text" placeholder="姓名" v-model="name" />
      </p>
      <p>
        <input type="text" placeholder="密码" v-model="pwd" />
      </p>
      <p @click="login">登录</p>
      <p v-if="flag" @click="$router.push('/registry')">去注册</p>
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
      flag: false
    };
  },
  methods: {
    async login() {
      let { name, pwd } = this;
      let res = await axios.post("/api/login", { name, pwd });
      // console.log(res)
      if (res.data.code === 1) {
        //登录成功
        window.localStorage.name = name;
        window.localStorage.uid = res.data.uid
        window.localStorage.pwd = res.data.pwd
        window.localStorage.token = res.data.token;
        this.$router.push("/list");
      } else if (res.data.code === 2) {
        alert("缺少参数！");
      } else if (res.data.code === 3) {
        alert("该用户名还未注册，请先去注册！");
        this.flag = true;
      } else {
        alert("登录失败");
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  position: relative;
}
.box {
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  top: 200px;
  p {
    width: 90%;
    height: 50px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 10px auto;
    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      padding-left: 20px;
    }
  }
}
</style>