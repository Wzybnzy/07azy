<template>
  <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>简介</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{item.knowname}}</td>
        <td>{{item.knowinfo}}</td>
        <td>
          <button @click="edit(item.knowname,item.knowinfo,item.id)">编辑</button>
          <button @click="del(item.id)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import axios from "@/utils/request.js"
import {knowlist,knowdel} from "@/api/api.js"
export default {
  data(){
    return {
      list:[]
    }
  },
  async created() {
    // console.log(JSON.parse(window.localStorage.user).uid,"%%%%%%%%%%%%%%%%%%%");
    let uid=JSON.parse(window.localStorage.user).uid
    let res = await knowlist({ uid });
    console.log(res.data.data, "list");
    if (res.data.code == 1) {
      this.list = res.data.data;
    }
  },
  methods:{
    async del(id){
      console.log(id,JSON.parse(window.localStorage.user).uid);
      
      let res=await knowdel({
        id,
        uid:JSON.parse(window.localStorage.user).uid
        // params:{
        //   id,
        //   uid:JSON.parse(window.localStorage.user).uid
        // }
      })

      if(res.data.code==1){
        let index=this.list.findIndex(item=>item.id==id);
        if(index!=-1){
          this.list.splice(index,1)
        }
      }
    },
    edit(knowname,knowinfo,id){
      // console.log(knowname,knowinfo,"^^^^^^^^^");
      let uid=JSON.parse(window.localStorage.user).uid
      this.$router.push({path:'/index/addknow',query:{knowname,knowinfo,id,uid}})
    }
  }
}
</script>

<style scoped>
  table{
    width: 600px;
    border-collapse: collapse;
    margin: 20px 30px;
  }
  th{
    background: #eee;
  }
  th,td{
    width: 200px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  button{
    margin: 0 10px;
  }
</style>