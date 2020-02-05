<template>
  <div class='list'>
     <el-container>
  <el-aside width="200px" style='backgroundcolor:#fff'>
   <el-row class="tac">
  <el-col :span="12">
  
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
  
      <el-menu-item 
       v-for='(item,index) in mnarr'
       @click='changeurl(item.url)'
       :key='index'>
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    
    </el-menu>
  </el-col>

</el-row>
  </el-aside>
  <el-main><router-view></router-view></el-main>
</el-container>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
     mnarr:[
       {
         name:'文档',
         icon:'el-icon-setting',
        url:'file'
       },
        {
         name:'知识库',
         icon:'el-icon-document',
        url:'know'
       },
       {
           name:'收藏',
         icon:'el-icon-document',
          url:'cang'
       },
       {
           name:'关注',
         icon:'el-icon-document',
          url:'watck'
       },
       {
           name:'个人信息',
         icon:'el-icon-document',
          url:'info'
       }

     ]
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeurl(url){
        this.$router.push({name:url})
      }
    }
  
}
</script>
<style>
  .list{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .search{
    width:100%;
    height: 60px;
    display: flex;
  }
  .tac el-row{
    background-color: #fff;
  }
  .list .input{
    width:200px;
    height: 25px;
    float: left;
  }
  .list .btn{
    width:40px;
    height:25px;
     float: right;
  }
</style>