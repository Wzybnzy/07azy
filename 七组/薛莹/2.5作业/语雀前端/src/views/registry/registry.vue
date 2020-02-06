<template>
  <div class="registry">
      <p>
          <input type="text" placeholder="请输入用户名" v-model="name">
      </p>
      <p>
          <input type="password" placeholder="请输入密码" v-model="pwd">
      </p>
      <p>
           <button @click="isregistry">注册</button>
      </p>
     
  </div>
</template>

<script>
import {registry} from "@/api/api.js";
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
            let res=await registry({name,pwd});

            if(res.data.code==1){
                this.$router.go(-1)
            }else if(res.data.code==2){
                console.log(res.data)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .registry{
        width: 100%;
        height: 100%;
    }
    p{
        width: 100%;
        height: 50px;
        text-align: center;
        &:nth-child(1){
            margin-top: 200px;
        }
    }
</style>