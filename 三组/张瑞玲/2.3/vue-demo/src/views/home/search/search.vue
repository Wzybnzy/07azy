<template>
  <div>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="goToDeatil(item.uid,item.know_id)">
           <h3>{{item.file_name}}</h3>
           <p>{{item.file_info}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  data(){
    return {
      list:[
         {
            "id": 1,
            "file_name": "q",
            "file_info": "q",
            "know_id": 1,
            "isshow": "1",
            "uid": 1
        },
      ]
    }
  },
  // async created() {
  //   let {search} = this.$route.params;
  //   console.log(search,'create')
  //   let res = await axios.get('/file/search',{search});
  //   console.log(res);
  //   if(res.data.code == 1){
  //     this.list = res.data.data;
  //   }
  // },
  methods:{
    goToDeatil(uid,kid){
      //去详情
      this.$router.push({name:'detail',params:{uid,kid}})
    }
  }
}
</script>

<style scoped>

</style>