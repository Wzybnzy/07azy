<template>
  <div class="list">
      <div class="header">
          <p>语雀</p>
          <p><input type="text" placeholder="输入内容"><button>搜索</button></p>
          <p><b>+</b><span>退出</span></p>
      </div>
      <div class="center">
          <div class="left" >
              <p v-for="(item,index) in list" :key="index" :class="index==ind?'active':''" @click="$router.push(item.path);ind=index">{{item.text}}</p>
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
            list:[
                {
                    path:"/list/dom",
                    text:"文档"
                },
                {
                    path:"/list/know",
                    text:"知识库"
                },
                {
                    path:"/list/collect",
                    text:"收藏"
                },
                {
                    path:"/list/attention",
                    text:"关注"
                },
                {
                    path:"/list/usermsg",
                    text:"个人信息"
                }
            ],
            ind:0
        }
    }
}
</script>

<style lang="scss">
.list{
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background:rgb(6, 175, 241);
    display: flex;
    p{
        flex:1;
        text-align: center;
        input{
            width: 65%;
            border:none;
            outline: none;
            line-height: 30px;
        }
        button{
            border:none;
            background:red;
            line-height: 30px;
            padding:0 5px;
        }
    }
}
.center{
    flex:1;
    display: flex;
    .left{
        width: 30%;
        background:#ccc;
        p{
            line-height: 50px;
            text-align: center;
            border-bottom: 1px solid #eee;
        }
    }
    .right{
        flex:1;
    }
}
.active{
    background:#fff;
    color:red;
}
</style>