<template>
  <div class="know">
     <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="名称"
      prop="know_name">
    </el-table-column>
    <el-table-column
      label="简介"
      prop="know_intro">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
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
  <el-button @click="tocreatek">新建</el-button>
  </div>
</template>

<script>
import httpAxios from '@/utils/request'
export default {
    data() {
        return {
            tableData: [],
            search:""
        }
    },
    methods:{
        tocreatek(){
           this.$router.push("/index/createknow")
        },
      handleEdit(index, row) {
        console.log(index, row);
        let knowid=row.id
        let {isshow}=row
        this.$router.push({path:"/index/createknow",query:{type:"编辑",knowid}})
      },
     async handleDelete(index, row) {
        let res=await httpAxios.get(`/api/relknow?knowid=${row.id}`)
        console.log(res)
        if(res.data.code==1){
            this.$message(res.data.msg)
            httpAxios.get("/api/knowlist").then(res=>{
                 this.tableData=res.data.data
            })
            
        }else{
             this.$message(res.data.msg);
        }
      }
        
    },
   async mounted(){
       let res=await httpAxios.get("/api/knowlist")  
        console.log(res)
        this.tableData=res.data.data
       
       },

       
      
}
</script>

<style lang="scss">
.know{
    width: 100%;
    height: 100%;
}

</style>