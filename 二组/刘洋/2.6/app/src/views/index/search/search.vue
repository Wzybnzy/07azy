<template>
  <div class="search">
      <ul v-for="(item,index) in data" :key="index" @click="todetail(item)">
        <li>{{item.fname}}</li>
        <li>{{item.fcont}}</li>
        <li>{{item.uname}}/{{item.kname}}</li>
      </ul>
  </div>
</template>

<script>
import httpAxios from '@/utils/request'
export default {
  data() {
    return {
        data:[]
    }
  },
  methods:{
    todetail(item){
      this.$router.push({path:"/index/detail",query:{item}})
    }
  },
 async created(){
    // console.log(this.$route.query.data)
    let res= await httpAxios.post("/api/search",{input:this.$route.query.input,uid:localStorage.uid})
      
      
      this.data=res.data.data
  }
}
</script>

<style lang="scss">
.search{
  width: 100%;
  height: 100%;
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul{
    width: 80%;
    border-bottom: 1px solid #ccc;
    li{
      margin: 10px;
    }
  }

}
</style>