<template>
  <div>
    名称 <input type="text" :placeholder="this.$route.query.name" v-model="title"><br/>
    简介 <textarea :placeholder="this.$route.query.brief" v-model="jije"></textarea>
    <select name="" id="" v-model="isshow">
      <option value="1">是</option>
      <option value="0">否</option>
    </select>

  
  <button @click="updata" v-if="this.$route.query.id">编辑</button>
  <button @click="newjian" v-else>新建</button>
  </div>
</template>

<script>
import axios from "../../utils/httpAxios"
export default {
  data() {
    return {
      title:"",
      jije:"",
      isshow:"1"
    }
  },
  created() {
    console.log(this.$route.query)
  },
  methods:{
   async newjian(){
      let {title,jije,isshow} = this
      let res = await axios.post("/api/add",{title,jije,uid:window.localStorage.uid,isshow})
      if(res.data.code==1){
        this.$router.push("/home/zsku")
      }
    },
    async updata(){
      let {id} = this.$route.query
      let {title,jije,isshow} = this
      console.log(id,title,jije,isshow)
      let res = await axios.post("/api/updata",{title,jije,isshow,id})
      console.log(res)
      if(res.data.code==1){
        this.$router.push("/home/zsku")
      }
    }
  }
}
</script>

<style>

</style>