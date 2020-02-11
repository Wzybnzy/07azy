<template>
  <div>
    <ul>
       <li v-for="(item,index) in list" :key="index" >
           <h3>{{item.file_name}}</h3>
           <p>{{item.file_info}}</p>
        </li>
    </ul>
     
  </div>
</template>

<script>
import axios from 'axios'
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
  async created() {
    let {uid,kid} = this.$route.params;
    let res = await axios.get('/api/file/detail',{
      uid,
      know_id:kid
    });
    console.log(res);
  },
}
</script>

<style>

</style>