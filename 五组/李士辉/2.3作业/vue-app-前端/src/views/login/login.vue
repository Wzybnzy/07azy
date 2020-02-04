<template>
  <div class="login">
      <div class="header">
          <h3>语 雀</h3>
          <input type="text" placeholder="Search">
          <button>搜索</button>
          <!-- <div class="rightname">
              <span></span>
              <span>退出</span>
          </div> -->
      </div>
      <div class="content">
          <div class="left">
              <li v-for="(item,index) in list" :key="index">
                  <router-link :to='item.path'>{{item.name}}</router-link>
              </li>
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
                    name:'文档',
                    path:'/login/ment'
                },
                {
                    name:'知识库',
                    path:'/login/base'
                },
                {
                    name:'收藏',
                    path:'/login/collect'
                },
                {
                    name:'关注',
                    path:'/login/guanzhu'
                },
                {
                    name:'个人信息',
                    path:'/login/geren'
                }
            ]
        }
    }
}
</script>

<style lang='scss'>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    html,body,.login{
        width: 100%;
        height: 100%;
    }
    .header{
        width: 1300px;
        height: 50px;
        background: blue;
        display: flex;
        align-items: center;
        margin: 0 auto;
        h3{
            margin-left: 100px;
        }
        input{
            width: 300px;
            height: 25px;
            border-radius: 10px;
            margin-left: 300px;
            outline: none;
            border: 1px solid #ccc;
            padding-left: 5px;
        }
        button{
            width: 70px;
            height: 30px;
            outline: none;
            border: none;
            border-radius: 10px;
            margin-left: 10px;
            background: skyblue;
            color: white;
        }
    }
    .content{
        width: 1300px;
        margin: 0 auto;
        display: flex;
        .left{
            width: 20%;
            height: 700px;
            border:1px solid #ccc;
            li{
                width: 100%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                margin-top: 10px;
                background: skyblue;
                color: white;
                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
        .right{
            width: 80%;
            height: 700px;
            border: 1px solid #ccc;
        }
    }
</style>