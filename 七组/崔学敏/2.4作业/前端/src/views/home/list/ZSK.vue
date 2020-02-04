<template>
  <div class="zsk">
<div class="top">
  <div>名称</div>
  <div>简介</div>
  <div>操作</div>
</div>
    <div class="bottom" v-for="(item,index) in tableData" :key="index">
      <div>{{item.title}}</div>
      <div>{{item.content}}</div>
     
        <el-row>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-row>
      
    </div>
  </div>
</template>

<script>
import httpAxios from "@/utils/request.js";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    // tableRowClassName({ row, rowIndex }) {
    //   if (rowIndex === 1) {
    //     return "warning-row";
    //   } else if (rowIndex === 3) {
    //     return "success-row";
    //   }
    //   return "";
    // }
  },
  async created() {
    let res = await httpAxios.get("/api/lists");
    console.log(res.data);
    this.tableData = res.data.data;
  }
};
</script>

<style lang="scss">
.zsk {
  width: 100%;
  height: 100%;
  padding-top:100px;
}
.top{
  width:100%;
  height:50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;
 
  div{
    flex:1;
    height:50px;
    text-align: center;
  }
}

.bottom{
  width:100%;
  height:50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;
   div{
    flex:1;
    height:50px;
    text-align: center;
  }
}
</style>