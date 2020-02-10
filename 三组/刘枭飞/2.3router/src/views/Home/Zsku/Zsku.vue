<template>
  <div class="da">
    <!-- <div v-for="(item,index) in list" :key="index" class="item">
     <p>{{item.name}}</p> 
     <p>{{item.brief}}</p> 
     <p><button>编辑</button><button @click="del(item.id)">删除</button></p>
    </div> -->

    <el-table
    :data="list"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="简介"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.brief }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "../../../utils/httpAxios"
export default {
  data() {
    return {
      list:[],
    }
  },
  methods:{
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({path:"/bjzsku",query:{...row}})
      },
     async handleDelete(index, row) {
        console.log(index, row);
        let {id} = row
        let res = await axios.post("/api/del",{id})
        console.log(res)
          if(res.data.code==1){
          this.list.splice(index,1);
        }
      },
  },
 async created() {
    let res = await axios.get("/api/select",{
      params:{
        uid:window.localStorage.uid
      }
    })
    console.log(res.data)
    if(res.data.code==1){
      this.list = res.data.msg
    }else{
      this.list = []
    }
  },
}
</script>

<style lang="scss" scoped>
  .item {
    width: 700px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ccc;
  }
  .da {
      width: 800px;
  }
</style>