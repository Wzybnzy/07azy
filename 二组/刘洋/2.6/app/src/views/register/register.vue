<template>
  <div class="register">
      <el-input v-model="name" placeholder="请输入用户名"></el-input>
      <el-input v-model="pwd" placeholder="请输入密码"></el-input>
      <el-button @click="register">注册</el-button>
  </div>
</template>

<script>
import httpAxios from '../../utils/request'
export default {
 data() {
        return {
            name:"",
            pwd:""
        }
    },
    methods:{
        async register(){
            let {name,pwd}=this
            let res=await httpAxios.post("/api/register" ,{name,pwd})
            if(res.data.code==1){
                this.$router.push("/login")
            }else{
                alert(res.data.msg);
            }
        }
    }
}
</script>

<style>

</style>