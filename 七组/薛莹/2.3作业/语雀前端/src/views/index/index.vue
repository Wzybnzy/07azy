<template>
  <div class="index">
      <div class="header">
          <h3>语雀</h3>
          <div class="input-box" v-if="$route.meta.show">
              <input type="text">
              <button>搜索</button>
          </div>
          <p>
              退出
          </p>
      </div>
      <div class="main">
          <div class="left">
              <router-link v-for="(item,index) in list" :key="index" :to="item.path">{{item.title}}</router-link>
          </div>
          <div class="right">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[{
                path:"/index/file",
                title:"文档"
            },{
                path:"/index/know",
                title:"知识库"
            },{
                path:"/index/atten",
                title:"关注"
            },{
                path:"/index/collect",
                title:"收藏"
            },{
               path:"/index/person",
               title:"个人信息"
            }]
        }
    }
}
</script>

<style scoped lang="scss">
    .index{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 50px;
        background: skyblue;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .main{
        width: 100%;
        flex: 1;
        overflow: auto;
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