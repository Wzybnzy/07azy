<template>
  <div>
     <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.know_name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="简介"
      width="180">
      <template slot-scope="scope" >
       <span style="margin-left: 10px">{{ scope.row.know_info }}</span>
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
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [ {
            id: 34,
            know_name: "a",
            know_info: "qq",
            isshow: "1",
            uid: "1"},
            {
            id: 35,
            know_name: "a",
            know_info: "bb",
            isshow: "1",
            uid: "1"},
            {
            id: 34,
            know_name: "a",
            know_info: "cc",
            isshow: "1",
            uid: "1"},
           ]
    }
  },
  // async created() {
  //   let res = await axios.get('/api/know/list',{ uid: JSON.parse(window.localStorage.user).uid });
  //   console.log(res, "list");
  //   if (res.data.code == 1) {
  //     this.list = res.data.data;
  //   }
  // },
   methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({name:'addknow'})
      },
      handleDelete(index, row) {
        console.log(index, row);
        //this.$message('删除成功')
        this.$confirm('是否要删除？','删除',{
          confirmButtonText:"确定",
          cancelButtonText:"取消",
          type:'warning'
        })
        .then(async () => {
          let { id, uid } = row;
          let res = await axios.get('/api/know/delete',{
            id,
            uid
          });
          if (res.data.code == 1) {
            this.list.splice(index, 1);
            this.$message({
            type: "success",
            message: "删除成功!"
          });
          }
          
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    }
}
</script>

<style>

</style>