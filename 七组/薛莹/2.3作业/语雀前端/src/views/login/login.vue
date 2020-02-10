<template>
  <div class="login">
      <p>
          <input type="text" v-model="name">
      </p>
      <p>
          <input type="password" v-model="pwd">
      </p>
      <button @click="islogin">登录</button>
      <button v-if="isshow" @click="gotore">注册</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            name:"",
            pwd:"",
            isshow:false
        }
    },
    methods:{
        async islogin(){
            let {name,pwd,isshow}=this;
            let res=await axios.post("/api/login",{name,pwd});

            if(res.data.code==1){
                this.$router.push("/index")
            }else if(res.data.code==2){
                isshow=true;
                console.log(res.data)
            }
        },
        gotore(){
            this.$router.push("/registry")
        }
    }
}
</script>

<style>

</style>