<template>
  <div class="edmtwd">
    <p>
      <el-input v-model="input" placeholder="编辑标题"></el-input>
    </p>
    <div>
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    </div>
  
    <p>
        <button>发布</button>
    </p>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      textarea: ""
    };
  }
};
</script>

<style lang='scss' scoped>
.edmtwd {
  width: 100%;
  height: 100%;
  p {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    button{
        width:80px;
        height:30px;
        outline: none;
        border:0;
        background-color:blue;
        color:#fff;
        border-radius: 10px;
    }
  }
  div {
    width: 100%;
    height: 300px;
    text-align: center;
  }
  .el-input {
    width: 300px;
    height:30px;
    margin-top: 50px;
  }
  .el-textarea{
      width:300px;
      height:300px;
      margin-top: 100px;
  }
  .el-row{
      width:300px;
      height:40px;
        .el-button{
          width:80px;
          height:40px;
          line-height: 40px;
          text-align: center;
          font-size: 12px;
      }
  }
}
</style>