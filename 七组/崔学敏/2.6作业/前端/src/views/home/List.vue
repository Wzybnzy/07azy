<template>
  <div class="list">
      <div class="left">
          <router-link to="wd" tag="p">文档</router-link>
          <router-link to="zsk" tag="p">知识库</router-link>
          <router-link to="sc" tag="p">收藏</router-link>
          <router-link to="gz" tag="p">关注</router-link>
          <router-link to="my" tag="p">个人信息</router-link>
      </div>
      <div class="right">
     <router-view/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.router-link-active{
  color:red;
  border-right:1px solid #a2b4f6;
  background-color: #a2b4f6;
}
</style>