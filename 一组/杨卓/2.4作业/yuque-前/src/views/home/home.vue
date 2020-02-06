<template>
  <div class="home-page">
      <div class="home-header">
        <label>
          <h1>语雀</h1>
          <input type="text" placeholder="请输入内容">
          <span>搜索</span>
        </label>
        <div class="home-item">
          <span>+</span>
          <span>欢迎您：{{name}}</span>
          <span>退出</span>
        </div>
        <ul :class="['headermenu',!flag?'none':'']">
          <li>新建文档</li>
          <li>新建知识库</li>
        </ul>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:"",
      flag:false
    }
  }
}
</script>

<style scoped>
.headermenu>li:hover{
  color: blue;
}
.headermenu>li{
  display: flex;
  align-items: center;
  padding:10px 20px;
  cursor: pointer;
}
.headermenu{
  position: absolute;
  border: 1px solid #333;
  background: #fff;
  right: 350px;
  top: 50px;
  color: #333;
}
.none {
  display: none;
}
.home-item>span:nth-child(3){
  cursor: pointer;
}
.home-item>span:nth-child(2){
  margin: 0 50px;
}
.home-item>span:nth-child(1){
  border:1px solid #ccc;
  border-radius: 100%;
  padding:0 6px;
  font-size: 20px;
  background: #fff;
  color: #333;
  cursor: pointer;
}
.home-header>label>span:hover{
  color: orange;
}
.home-header>label>span{
  cursor: pointer;
  margin-left: 10px;
}
.home-header>label>input::-webkit-input-placeholder{
  background: rgb(63,81,181);
  color: #fff;
  padding-left: 5px;
}
.home-header>label>h1{
  margin-right: 100px;
}
.home-header>label{
  display: flex;
  align-items: center;
}
.home-header{
  width: 100%;
  height: 50px;
  background: rgb(63,81,181);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  position: relative;
}
.home-page{
  width: 100%;
  height: 100%;
}
</style>