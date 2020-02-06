<template>
  <div class="register">
    <h1>注册</h1>
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item>
        <el-input v-model="form.user" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.pwd" placeholder="输入密码"></el-input>
      </el-form-item>

      <el-form-item class="btn-box">
        <el-button type="primary" @click="onSubmit" class="btn">注册</el-button>
      </el-form-item>
    </el-form>
    <div class="to-login">
      <router-link to="/login" tag="span">已有账号,去登陆</router-link>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/api";
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
      let res = await register({ user, pwd });
      if (res.data.code == 1) {
        this.$message({
          message: res.data.msg,
          offset: 50,
          duration: 1500
        });
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 700);
      } else {
        this.$message({
          message: res.data.msg,
          offset: 50,
          duration: 1500
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
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
  text-align: center;
  transform: translateY(-50%);
  .el-input {
    width: 300px;
    margin-left: -80px;
  }
}
.to-login {
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