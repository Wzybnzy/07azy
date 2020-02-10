<template>
   
       <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.title}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="简介"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.con}}</el-tag>
          </div>
        </el-popover>
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
  
</template>

<script>
import httpAxios from '../../../utils/request';
export default {
    data() {
      return {
        tableData:[]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({path:"/bjj",query:{row}})
      },
    async handleDelete(index, row) {
        console.log(index, row);
        let res=await httpAxios.get("/api/del",{params:{id:row.id}})
        console.log(res,"1111111111")
        if(res.data.code===1){
          this.tableData.splice(index,1)
          this.$message("删除成功")
        }else{
          this.$message("删除失败")
        }
      }
    },
  async created(){
     let res=await httpAxios.get("/api/list")
     console.log(res.data.mes)
      if(res.data.code==1){
           this.tableData=res.data.mes
      }else{
        this.$message('获取知识库失败');
      }
    }
}
</script>

<style>

</style>