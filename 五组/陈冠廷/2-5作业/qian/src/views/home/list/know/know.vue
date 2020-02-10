<template>
  <div>
   <el-table
    :data="list"
    style="width: 100%">
    <el-table-column
      label="标题"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.knowtit }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="内容"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.knowcon }}</span>
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
import httpAxios from '../../../../utils/request';
export default {
   data() {
      return {
        list:[]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({path:'/addknow',query:{row}});
      },
     async handleDelete(index, row) {
        // console.log(index, row);
        let res=await httpAxios.get('/api/know/del',{params:{id:row.id}});
        // console.log(res)
        if(res.data.code==1){
           this.list.splice(index,1);
          this.$message('删除成功');
        }else{
          this.$message('删除失败');
        }
      }
    },
    async created(){
      let res=await httpAxios.get('/api/know/list');
      // console.log(res)
      if(res.data.code==1){
        // this.$message('获取知识库成功');
        this.list=res.data.data;
      }else{
        this.$message('获取知识库失败');
      }
    }
  
}
</script>

<style>

</style>