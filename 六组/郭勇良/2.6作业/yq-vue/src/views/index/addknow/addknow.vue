<template>
  <div class="addknow">
    <p>
      标题:
      <input type="text" v-model="knowname">
    </p>
    <p>
      <textarea name="" id="" cols="30" rows="10" v-model="knowinfo"></textarea>
    </p>
    
    <select name="" id="" v-model="ischeck">
      <option value="1">是</option>
      <option value="0">否</option>
    </select>
    <p>
      <button @click="addKnow">{{!id?"添加知识库":"编辑知识库"}}</button>
    </p>
    
  </div>
</template>

<script>
// import axios from "@/utils/request.js"
import {addknow,knowupdate} from "@/api/api"
export default {
  data(){
    return {
      knowname:"",
      knowinfo:"",
      ischeck:"",
      id:null,
      uid:null
    }
  },
  mounted(){
    let {knowname,knowinfo,id,uid}=this.$route.query;
    this.knowname=knowname
    this.knowinfo=knowinfo
    this.id=id
  },
  methods:{
    async addKnow(){
      let {id}=this;
      if(id){//编辑
           let {knowname,knowinfo,ischeck}=this;
            let res=await knowupdate({
            knowname,
            knowinfo,
            ischeck,
            id,
            uid:JSON.parse(window.localStorage.user).uid
          })
          if(res.data.code==1){
            this.$router.push("/index")
          }
      }else{//添加
        let {knowname,knowinfo,ischeck}=this;
          let res=await addknow({
            knowname,
            knowinfo,
            ischeck,
            uid:JSON.parse(window.localStorage.user).uid
          })
          if(res.data.code==1){
            this.$router.push("/index")
          }
      }
      
    }
  }
}
</script>

<style scoped>
  .addknow{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p{
    margin: 10px;
  }
</style>