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
        <td>{{item.knowname}}</td>
        <td>
          <button>编辑</button>
          <button @click="del(item.id)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "@/utils/request.js"
export default {
  data(){
    return {
      list:[]
    }
  },
  async mounted(){
    let res=await axios.get("/api/know/list",{
      params:{
        uid:window.localStorage.uid
      }
    });
    console.log(res)
    this.list=res.data.data
  },
  methods:{
    async del(id){
      let res=await axios.get("/api/know/del",{
        params:{
          id,
          uid:window.localStorage.uid
        }
      })

      if(res.data.code==1){
        let index=this.list.findIndex(item=>item.id==id);
        if(index!=-1){
          this.list.splice(index,1)
        }
      }
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