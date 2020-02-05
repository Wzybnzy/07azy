<template>
  <div class="wd">
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
export default {
 data() {
    return {
      tableData: []
    };
  },
}
</script>

<style lang="scss">
.wd{
    width:100%;
    height:100%;
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