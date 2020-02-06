<template>
  <div class="addfile">
    <p>
      <input type="text" placeholder="请输入标题" v-model="filename">
    </p>
    <p>
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容" v-model="info"></textarea>
    </p>
    <p><button @click="addFile">发布</button></p>
    
    
  </div>
</template>

<script>
import {addfile} from "@/api/api"
export default {
  data(){
    return {
      filename:"",
      info:"",
      ischeck:"",
      know_id:null
    }
  },
  mounted(){
    let {ischeck,id}=this.$route.query.item;
    this.ischeck=ischeck;
    this.know_id=id;
    console.log(this)
  },
  methods:{
    async addFile(){
      let {filename,info,ischeck,know_id}=this;
      let res=await addfile({
        filename,info,ischeck,know_id,
        uid:window.localStorage.uid
      })
      console.log(res)
      if(res.data.code==1){
        this.$router.push("/index/list/file")
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .addfile{
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