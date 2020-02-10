<!-- registry -->
<template>
    <div>
        registry
         <input type="text" v-model="name">
        <input type="text" v-model="pwd">
        <button  @click="registry">去注册</button>
        <p v-if="isShow"  @click="login">登录</p>
    </div>
</template>

<script>
import httpAxios from './../utils/requset.js'
export default {
  components: {},
  data () {
    return {
      name:"",
      pwd:"",
      isShow:false
    };
  },

  computed: {},

 // mounted: {},

  methods: {
    async registry(){
       const {name,pwd} = this
       let res = await httpAxios.post("/api/registry",{name,pwd}) 
       console.log(res);
       
       if(res.data.code==1){
            console.log(res,"注册成功");
              alert(res.data.mes);
              this.isShow=true
            }else{
                console.log(res.data.mes);
      }
    },
     login(){
          let {name,pwd} = this 
          this.$router.push("/login")
      }
  }
}

</script>
<style lang='scss' scoped>

</style>