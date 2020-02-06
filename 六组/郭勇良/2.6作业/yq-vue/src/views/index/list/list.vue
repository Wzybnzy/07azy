<template>
  <div class="list">
      <div class="left">
          <router-link v-for="(item,index) in list" :key="index" :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="right">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
     data(){
        return {
            list:[{
                path:"/index/list/file",
                title:"文档"
            },{
                path:"/index/list/know",
                title:"知识库"
            },{
                path:"/index/list/atten",
                title:"关注"
            },{
                path:"/index/list/collect",
                title:"收藏"
            },{
               path:"/index/list/person",
               title:"个人信息"
            }]
        }
    }
}
</script>

<style scoped lang="scss">
    .list{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .left{
        flex: 2;
      border-right:1px solid #ccc;
      a{
          display: block;
          width: 100%;
          height: 50px;
          color: #000;
          text-align: center;
          line-height: 50px;
          text-decoration: none;
      }
      .router-link-active{
          background: orange;
          color: #fff;
      }
    }
    .right{
        flex: 8;
    }
</style>