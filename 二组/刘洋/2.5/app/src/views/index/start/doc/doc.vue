<template>
  <div class="doc">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="名称" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.fname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="归属" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.uname+"/"+scope.row.kname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="createf">新建</el-button>
  </div>
</template>

<script>
import httpAxios from "@/utils/request";
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    httpAxios.get("/api/doclist").then(res => {
        
      // let arr = res.data.data;
      
        res.data.data.forEach(item => {
          httpAxios.post("/api/getuser", { uid: item.uid }).then(res1 => {
            this.$set(item,"uname",res1.data.data)
          });
          httpAxios.post("/api/getkname", { kid: item.kid }).then(res2 => {
            this.$set(item,"kname",res2.data.data)
          });
        });
        // console.log(this.tableData);
        this.tableData=res.data.data
      console.log( this.tableData);
    });
  },
  methods: {
    createf(){
      this.$router.push("/index/createdoc")
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({path:"/index/createdoc",query:{type:"编辑",row}})
    },
   async handleDelete(index, row) {
     let res=await httpAxios.post("/api/deldoc",{fid:row.id})
    //  let ind=this.tableData.findIndex(item=>item.id=row.id)
     this.tableData.splice(index,1)
    }
  }
};
</script>

<style lang="scss">
.doc {
  width: 100%;
  height: 100%;
}
</style>