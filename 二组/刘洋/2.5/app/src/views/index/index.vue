<template>
  <div class="index">
    <div class="index-header">
      <span>语雀</span>
      <span>
        <el-button type="text" @click="dialogTableVisible = true">+</el-button>
        用户:{{name}}
      </span>
       <el-dialog title="请选择知识库" :visible.sync="dialogTableVisible">
       <el-table
    :data="gridData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="名称"
      prop="know_name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">选择</el-button>
       
      </template>
    </el-table-column>
  </el-table>
      </el-dialog>
    </div>
    <div class="index-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import httpAxios from '@/utils/request'
export default {
  data() {
    return {
      name: localStorage.name,
      gridData: [],
      dialogTableVisible: false,
      search:""
    };
  },
  methods: {
    
     handleEdit(index, row) {
         console.log(index,row)
         localStorage.kid=row.id
     }
  },
 async created() {
   let res=await httpAxios.post("/api/knowlist",{uid:localStorage.uid}) 
  console.log(res)
  this.gridData=res.data.data
  },
};
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.index-header {
  width: 100%;
  height: 50px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}
.index-main {
  flex: 1;
}
.el-dialog__body{
    padding: 10px;
}
</style>