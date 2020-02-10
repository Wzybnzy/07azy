<!-- login -->
<template>
    <div>login
        <input type="text" v-model="name">
        <input type="text" v-model="pwd">
        <button @click="logIn">登录</button>
        <p v-if="isShow" @click="registry">去注册</p>
    </div>
</template>

<script>
import httpAxios from './../utils/requset.js'

export default {
  components: {},
  data () {
    return {
        name:"",pwd:"",isShow:false 
    };
  }, 
  computed: {}, 
 // mounted: {},

  methods: {
   async logIn(){
       const {name,pwd} = this
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