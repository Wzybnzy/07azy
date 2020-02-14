<template>
  <div class="home">
     <div class="top">
       <span>语雀</span>
       <span>
        <input type="text" placeholder="请输入"><button>搜索</button>
       </span>
        <div class="cc">
            <span @click="ongo" class="dd">0</span>
        <div class="bb">
             <span v-if="flag" @click="onbjwd">新建文档</span>
          <span v-if="flag" @click="onbj">新建知识库</span>
          </div>
        </div>
       <span class="aa">欢迎<p></p>进入</span>
       <span>退出</span>
     </div>
    <div class="main">
     <div class="main_page">
        <div class="left">
<el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
         <el-menu-item-group>
           <el-menu-item index="1-1"><router-link to="/home/know">文档</router-link></el-menu-item>
          <el-menu-item index="1-2"> <router-link to="/home/knowbook">知识库</router-link></el-menu-item>
          <el-menu-item index="1-2"> <router-link to="/home/sc">收藏页面</router-link></el-menu-item>
           <el-menu-item index="1-2"> <router-link to="/home/gz">关注</router-link></el-menu-item>
             <el-menu-item index="1-1"><router-link to="/home/gr">个人页面</router-link></el-menu-item>
        </el-menu-item-group>
    </el-menu>
  </el-col>
       
</div>
  
 <div class="right">
          <router-view></router-view>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     flag:false
   }
  },
    methods: {
      ongo(){
           this.flag=!this.flag
      },
      onbjwd(){
        this.$router.push("/bjwd")
      },
      onbj(){
        this.$router.push("/bj")
      },

    }
  }
</script>

<style lang="scss" scoped>
     .home{
         width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
     }
     .top{
       width: 100%;
       height: 50px;
       border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // color: white;
     }
     .mian{
       flex:1;
       overflow: auto;
       display: flex;
     }
     .main_page{
       width: 100%;
       display: flex;
     }
     .left{
       width: 40%;
       height: 100%;
     }
     .right{
       width: 60%;
       height: 100%;
     }

     .aa{
       display: flex;
     }
     .cc{
       width: 100px;
       height: 60px;
       z-index: 1;
     }
     .dd{
    width: 100px;
       height: 30px;
       display: flex;
       flex-direction: column;
          justify-content: space-around;
          padding-top: 20px;
     }
     .bb{
       display: flex;
       flex-direction: column;
       margin-top: 50px;
       width: 100px;
       height: 50px;
      //  background: red;
     }
</style>