<template>
  <div class="file">
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
          <td>{{item.filename}}</td>
          <td>{{item.info}}</td>
          <td>
            <button>编辑</button>
            <button @click="show(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <dialogvue v-if="isshow">
      <div class="box">
        <p>确定要删除此项内容？</p>
        <button @click="del">确定</button>
        <button>取消</button>
      </div>
    </dialogvue>
  </div>
</template>

<script>
import {filelist,delfile} from "@/api/api"
import dialogvue from "../../../../components/dialog"
export default {
  data(){
    return {
      list:[],
      isshow:false,
      id:null
    }
  },
  components:{
    dialogvue
  },
  async mounted(){
    let res=await filelist({
      uid:window.localStorage.uid
    })
    this.list=res.data.data
    console.log(res)
  },
  methods:{
    show(id){
      this.isshow=true;
      this.id=id
      console.log(this.id)
    },
    async del(){
      let res=await delfile({id:this.id,uid:window.localStorage.uid});
      if (res.data.code == 1) {
        let index = this.list.findIndex(item => item.id == id);
        if (index != -1) {
          this.list.splice(index, 1);
        }
        this.isshow=false
      }
    }
  }
}
</script>

<style scoped>
table {
  width: 600px;
  border-collapse: collapse;
  margin: 20px 30px;
}
th {
  background: #eee;
}
th,
td {
  width: 200px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
button {
  margin: 0 10px;
}
</style>