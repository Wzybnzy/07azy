<template>
  <div class="home">
    <div class="left">
      <router-link to="/home/file">文档</router-link>
      <router-link to="/home/know">知识库</router-link>
      <router-link to="/home/sc">收藏</router-link>
      <router-link to="/home/gz">关注</router-link>
      <router-link to="/home/self">个人信息</router-link>
    </div>

    <div class="right">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .home{
      width: 100%;height: 100%;
      display: flex;
  }
  .left{
      flex: 3;
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: 150px;
  }
  .right{
      flex: 7
  }
</style>