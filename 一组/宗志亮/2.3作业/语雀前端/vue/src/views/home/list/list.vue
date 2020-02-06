import axios from '@/utils/request';
<template>
  <div class='list'>
     <div class="mask" v-if='flag'>
      <span @click='quxiao'>取消</span>
       <div class="maskl">
       
            <h4>请选择知识库</h4>
                  <ul>
                    <li v-for='item in knowlist' :key=item.id>{{item.zisiku_name}}</li>
                  </ul>
                    
       </div>
      
     </div>


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
import axios from '@/utils/request'
export default {
  data(){
    return{
         flag:'',
         knowlist:'',
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
      },
      quxiao(){
        this.flag=!this.flag;
      }
    },
    created() {
      const {flag}=this.$route.query.item;
      console.log(flag)
      this.flag=flag;
      axios.get('/getknow').then(res=>{
        console.log(res.data.data)
        this.knowlist=res.data.data
      })

    },
  
}
</script>
<style>
  .list{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
   .mask{
  position:absolute;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.3);
} 
.maskl{
  position: absolute;
  top:20px;
  left:250px;
  width:300px;
  height:300px;
  margin:10px auto;
  background-color: #fff;
}
.mask span{
  line-height: 2px;
}
.mask h4{
  color:#000;
 line-height: 45px;
}
.mask ul li{
  line-height: 50px;
  border:1px solid #cccccc;
  color:#000;
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