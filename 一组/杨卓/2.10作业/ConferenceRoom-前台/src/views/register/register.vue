<template>
  <div class="register-page">
    <div class="register-main">
      <h1>注册</h1>
      <div>
        <span class="icon iconfont icon-yonghu"></span>
        <input type="text" placeholder="用户名" v-model="name" />
      </div>
      <div>
        <span class="icon iconfont icon-mima"></span>
        <input type="text" placeholder="密码" v-model="pwd" />
      </div>
      <div>
        <button @click="registerfn">注册</button>
      </div>
      <div>
        <button v-if="flag" @click="$router.push('/login')">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import "@/font/iconfont.css"; //引入图标样式
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      flag:false
    };
  },
  methods: {
    async registerfn() {//注册
      let { name, pwd } = this;
      let res = await axios.post("/api/register", { name, pwd });
      if (res.data.code == 4) {//缺少参数
        this.$message({
          message: res.data.msg,
          center: true,
          duration: "1000" 
        });
        return;
      }
      if (res.code == 3) {//类型校验失败
        this.$message({
          message: res.data.msg,
          center: true,
          duration: "1000" 
        });
        return;
      }
      if(res.data.code==2){//已有该用户，请登录
        this.flag=true
      }
      console.log(res, "EEEEEEE");
      if (res.data.code == 1) {
        //登录成功
        window.location.user = JSON.stringify(res.data);
        this.$router.push("/login");
        this.$message({
          message: res.data.msg,
          center: true,
          duration: "1000" //设置时间
        });
      } else {
        this.$message({
          message: res.data.msg,
          center: true,
          duration: "1000"
        });
      }
    }
  }
};
</script>

<style>

.register-main > div > button {
  margin: 0 10px;
  border: 0;
  outline: 0;
  background: rgb(244, 243, 243);
  width: 300px;
  height: 30px;
}
.register-main > div > span {
  margin-right: 20px;
}
.register-main > div {
  line-height: 80px;
}
.register-main {
  width: 600px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-page {
  width: 100%;
  height: 100%;
}
</style>