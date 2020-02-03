<template>
  <div class="list-page">
      <div class="list-main">
          <div class="list-left">
              <ul>
                  <li v-for="(item,index) in arrlist" 
                  :key="index"
                  :class="{'active':index==ind}"
                  @click="activefn(index)"
                  >{{item}}</li>
              </ul>
          </div>
          <div class="list-right">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arrlist:['文档','知识库','收藏','关注','个人信息'],
            ind:0//默认初始下标
        }
    },
    methods:{
        activefn(index){
            this.ind=index
        }
    }
}
</script>

<style>
.list-page{
    width: 100%;
    height: 100%;
}
.list-main .list-right{
    flex:7;
}
.list-main .list-left ul li{
    line-height: 50px;
    text-align: center;
}
.list-main .list-left{
    flex:3;
    border-right: 1px solid #ccc;
}
.list-main{
    width: 100%;
    height: 100%;
    display: flex;
}
ul>li{
    cursor: pointer;
}
.active{
    color: rgb(95,178,255);
    background: rgb(231,244,255);
    border-right: 3px solid rgb(24,144,255);
}
</style>