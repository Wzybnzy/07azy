<template>
  <div class="home">
    <div class="left">
      <router-link v-for="(item,index) in list" :key="index" :to="item.path">
        {{item.name}}
      </router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          name:"文档",
          path:"/home/wdang"
        },
        {
          name:"知识库",
          path:"/home/zsku"
        },
        {
          name:"收藏",
          path:"/home/shoucang"
        },
        {
          name:"关注",
          path:"/home/guanzhu"
        },
        {
          name:"个人信息",
          path:"/home/my"
        },    
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.left {
  width: 200px;
  height: 600px;
  display: flex;
  flex-direction: column;
  a{
    text-decoration: none;
    color: #000;
    display: inline-block;
    height: 50px;
    text-align: center;
  }
  .router-link-active {
    color: red;
 }
}
.home {
  display: flex;
}
</style>