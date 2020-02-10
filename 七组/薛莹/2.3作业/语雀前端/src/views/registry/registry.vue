<template>
  <div class="login">
      <p>
          <input type="text" v-model="name">
      </p>
      <p>
          <input type="password" v-model="pwd">
      </p>
      <button @click="isregistry">注册</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            name:"",
            pwd:""
        }
    },
    methods:{
        async isregistry(){
            let {name,pwd,isshow}=this;
            let res=await axios.post("/api/registry",{name,pwd});

            if(res.data.code==1){
                this.$router.push("/login")
            }else if(res.data.code==2){
                console.log(res.data)
            }
        }
    }
}
</script>

<style>

</style>