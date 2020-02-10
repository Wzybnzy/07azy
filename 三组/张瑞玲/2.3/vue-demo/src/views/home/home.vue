<template>
  <div>
    <el-container>
  <el-header class="header">
      <div class="headerleft">
         <h4>语雀</h4>
             <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="goToSearch">搜索</el-button>
      </div>
      <div class="headerright">
        <div @click="showmenu">+</div>
        <div>欢迎:{{name}}</div>
        <span>退出</span>
      </div>
      <ul :class="['headermenu',!flag ? 'none':'']">
          <li @click="showfile">新建文档</li>
          <li @click="gotoknow">新建知识库</li>
      </ul>
  </el-header>
 <router-view></router-view>
</el-container>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  data() {
    return {
      input: '',
      name:'',
      flag:false
    }
  },
  methods: {
    showmenu(){
      this.flag =!this.flag
    },
    gotoknow(){
      this.flag=false
      this.$router.push({name:'addknow'})
    },
    showfile(){
       this.flag=false
      this.$router.push({name:'addfile'})
    },
    // async showfile() {
    //   this.dialogVisible= true;
    //   let res = await axios.get('/api/know/list',{uid:JSON.parse(window.localStorage.user).uid});
    //   console.log(res);
    //   if(res.data.code == 1){
    //     this.list = res.data.data;
    //   }
    // },
    // goToFile(kid,isshow,uid){
    //   this.flag = false; 
    //   this.dialogVisible= false;
    //   this.$router.push({name:'addfile',params:{kid,isshow,uid,flag:true}})
    // },
     goToSearch(){
      this.$router.push({name:'search'})
    }
  }
}
</script>

<style>
  .header{
    display: flex;
    justify-content: space-around;
    background: #409EFF;
  }
  .headerleft,.headerright{
    display: flex;
  }
  .none{
    display: none;
  }
 
</style>