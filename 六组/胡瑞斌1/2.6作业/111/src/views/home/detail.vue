<template>
  <div>
      <div v-for="(item,index) in list" :key="index" class="aa">
        <h3>{{item.filename}}</h3>
        <p>{{item.fileinfo}}</p>
      </div>
  </div>
</template>

<script>
import {detailfile} from '@/api/api'
export default {
  data(){
    return {
      list:[]
    }
  },
  async created(){
    console.log(this.$route);
    let {uid,knowid} = this.$route.params
    let res = await detailfile ({uid,knowid})
    console.log(res.data);
    this.list = res.data
  }
}
</script>

<style scoped>
  .aa{
    display: flex
  }
  .aa>h3{
    width: 100px;
  }
</style>