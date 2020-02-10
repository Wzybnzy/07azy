<!-- login -->
<template>
    <div>
       <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
       <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="logIn">登录</el-button>
        <p :class="{'active':isShow}" @click="registry">注册</p>
      </el-form-item>
    </el-form>
    </div>
</template>

<script>
import httpAxios from './../utils/requset.js'

export default {
  components: {},
  data () {
    return {
      form:{
          name:"",
          pwd:""
      },
      isShow:false 
    };
  }, 
  computed: {}, 
 // mounted: {},

  methods: {
   async logIn(){     
       const {name,pwd} = this.form       
          //  console.log(555,name);
       let res = await  httpAxios.post('/api/login',{name,pwd})
       console.log(res);
       if(res.data.code==1){
         console.log(res.data,'登录成功');
         localStorage.setItem("token", res.data.token);
         localStorage.setItem("name", name);
         this.$router.push("/home")
       }else{
          console.log(res.data.mes)
          alert(res.data.mes)
          this.isShow = true
       } 
    },
    registry() {
      this.$router.push("/registry");
    }
  }
}

</script>
<style lang='scss' scoped>

</style>