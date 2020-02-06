<template>
  <div class="login">
    <p>
      <input type="text" v-model="name" placeholder="请输入用户名"/>
    </p>
    <p>
      <input type="password" v-model="pwd" placeholder="请输入密码"/>
    </p>
    <p>
      <button @click="islogin">登录</button>
      <button v-if="isshow" @click="gotore">注册</button>
    </p>
  </div>
</template>

<script>
import {login} from "@/api/api.js";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      isshow: false
    };
  },
  methods: {
    async islogin() {
      let { name, pwd } = this;
      let res = await login({name,pwd})
        console.log(this)
      if (res.data.code == 1) {
        // window.localStorage.uid=res.data.uid;
        // window.localStorage.token=res.data.token;
        // window.localStorage.name=res.data.name
        window.localStorage.user=JSON.stringify({...res.data,name});//本地存储里就有了
        this.$router.push("/index");
      } else if (res.data.code == 2) {
        this.isshow = true;
        console.log(res.data);
      }
    },
    gotore() {
      this.$router.push("/registry");
    }
  }
};
</script>

<style scoped lang="scss">
.registry {
  width: 100%;
  height: 100%;
}
p {
  width: 100%;
  height: 50px;
  text-align: center;
  &:nth-child(1) {
    margin-top: 200px;
  }
}
</style>