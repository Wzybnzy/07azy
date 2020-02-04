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
      <button @click="addKnow">添加知识库</button>
    </p>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      knowname:"",
      knowinfo:"",
      ischeck:""
    }
  },
  methods:{
    async addKnow(){
      let {knowname,knowinfo,ischeck}=this;
      let res=await axios.post("/api/know/add",{
        knowname,
        knowinfo,
        ischeck,
        uid:window.localStorage.uid
      })

      if(res.data.code==1){
        this.$router.push("/index")
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