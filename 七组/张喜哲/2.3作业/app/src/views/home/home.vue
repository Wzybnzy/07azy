<template>
  <div class="home">
    <div class="top"></div>
    <div class="main">
      <div class="left">
        <router-link to="/home/list">列表</router-link>

        <router-link to="/home/file">知识库</router-link>
        <router-link to="/home/collect">收藏</router-link>
        <router-link to="">关注</router-link>

      </div>
      <div class="right"><router-view/></div>
    </div>
        

  </div>
</template>

<script>
export default {

}
</script>

<style>
body,html,#app,.home{
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
.home{
  display: flex;
  flex-direction: column;
}
.top{
  width: 100%;
  height: 40px;
  background-color: yellowgreen;
}
.main{
  flex: 1;
  width: 100%;                         
  overflow: auto;
  display: flex;
}
.left{
  width: 265px;
  height: 100%;
  border-right: 1px solid black;
}
.right{
  flex: 1;
  height: 100%;
}
.left>a{
  display: block;
  width: 100%;
  height: 65px;
  text-decoration: none;
  text-align: center;
  line-height:65px;
}
</style>