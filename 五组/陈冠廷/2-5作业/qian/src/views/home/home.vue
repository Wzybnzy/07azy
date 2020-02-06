<template>
  <div class="home">
    <div class="home-header">
       <p class="one">
         <input type="text" name="" id="">
         <span>搜索</span>
       </p>
       <p class="two">
         <span @click='show'>
           ++
         </span>
         <span>
           欢迎：{{name}}
         </span>
         <span>
           退出
         </span>
       </p>
       <div  class='box' v-if='flag'>
         <p>添加文档</p>
         <p @click="gotoaddknow">添加知识库</p>
       </div>
    </div>
    <div class="home-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
 data(){
   return {
     name:'',
     flag:false
   }
 },
 async created(){
   this.name=window.localStorage.name;
  
 },
 methods:{
   show(){
     
   this.flag=!this.flag;
   },
   gotoaddknow(){
     this.flag=false;
     this.$router.push('/addknow');
   }
 }
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-header{
  width: 100%;
  height: 50px;
  display: flex;
  /* justify-content: space-around; */
  background: blue;
}

.home-main{
    width: 100%;
  height: 100%;
}
.one{
  width: 36%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.one input{
  width: 70%;
  height: 30%;
}
.two{
  width: 64%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.box{
  position: absolute;
  top:40px;
  right:130px;
  z-index: 1;
}
.two span{
  width: 70px;
  height: 100%;
}
</style>