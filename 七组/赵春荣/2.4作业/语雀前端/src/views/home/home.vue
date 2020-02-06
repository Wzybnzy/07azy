<template>
  <div class="home">
   <el-container>
  <el-header>
    <div class="header">
     <div class="l">
     <span>语雀</span>
     <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
     <span>搜索</span>
    </div>
     <div class="r">
       <span @click='menushow'>+</span>
       <div>欢迎您：{{name}}</div>
        <i>退出</i>
        <div class="nemu" v-if='show'>
          <ul>
            <li>文档</li>
            <li @click='jumpknow'>知识库</li>
          </ul>
        </div>
    </div >
    </div>
  </el-header>
  <el-main><router-view></router-view></el-main>

</el-container>


  </div>
</template>
<script>
export default {
  data(){
    return{
      name:'',
      input:'',
      show:false
    }
  },
  methods: {
    menushow(){
      this.show=!this.show;
    },
    jumpknow(){
      this.show=false;
      this.$router.push('/home/addknow')
    }
  },
}
</script>
<style>
.nemu{
  position: absolute;
  top:35px;
  right:180px;
  color:skyblue;
  background-color: #333;
}
.nemu ul li{
  line-height: 25px;
  border:1px solid #fff;
}


   .el-header{
     position: relative;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .header{
    width:100%;
    height:100%;
  
    display: flex;
  justify-content: space-around;
  }
  .header .l{
    width: 75%;
    height: 100%;
    display: flex;
  
  }
  .header .r{
    width:30%;
    height:100%;
    display: flex;
    color:#fff;
  }
  .l span{
    color:#fff;
  }
  .header .l .input{
    width:120px;
    height: 30px;
  }
  #btn{
    width:40px;
    height:40px;
    margin:10px;
  }
  .r span{
    width:30px;
    height:30px;
    display:block;
    border:1px solid #fff;
    border-radius: 50%;
    color:#fff;
    line-height: 30px;
  }

  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>