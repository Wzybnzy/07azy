<template>
  <div class="login">
    <h1>登录</h1>
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item>
        <el-input v-model="form.user" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.pwd" placeholder="输入密码" type="password"></el-input>
      </el-form-item>

      <el-form-item class="btn-box">
        <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="to-register">
      <router-link to="/register" tag="span">没有账号,去注册</router-link>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/api";

export default {
  data() {
    return {
      form: {
        user: "",
        pwd: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      let { user, pwd } = this.form;
      let res = await login({ user, pwd });
      if (res.data.code == 1) {
        this.$toasts(this, res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", user);
        localStorage.setItem("uId", JSON.stringify(res.data.uId));
        setTimeout(() => {
          this.$router.push({ name: "doc" });
        }, 700);
      } else {
        this.$toasts(this, res);
      }
    }
  }
};
</script>

<style  lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translate(-50%);
  }
}
.form {
  width: 300px;
  transform: translateY(-50%);
  .el-input {
    width: 300px;
    margin-left: -80px;
  }
}
.to-register {
  position: fixed;
  top: 52%;
  left: 50%;
  margin-left: -150px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
}
.btn-box {
  text-align: center;
  .btn {
    margin-left: -80px;
  }
}
</style>