<template>
  <div>
      <div v-for="(item,index) in list" :key="index" @click="goToDetail(item.uid,item.knowid)">
        <h3>{{item.filename}}</h3>
        <p>{{item.fileinfo}}</p>
      </div>
  </div>
</template>

<script>
import {searchfile} from '@/api/api.js'
export default {
  data(){
    return {
      list:[]
    }
  },
  async created(){
    let {search} = this.$route.params
    let res = await searchfile({search})   
    if(res.data.code==1){
      this.list = res.data.data
    }
  },
  methods:{
    goToDetail(uid,knowid){
      this.$router.push({name:'detail',params:{uid,knowid}})
    }
  }
}
</script>

<style>

</style>