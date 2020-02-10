<template>
  <div class="header">
    <span>语雀</span>
    <span v-if="$route.meta.show">
      <input type="text" placeholder="请输入关键词" />
      <button>搜索</button>
    </span>
    <div class="headermenu">
      <div class="add" @click="showTrue">+</div>
      <div>欢迎你:{{name}}</div>
      <span @click="goBack">退出</span>
    </div>
    <ul class="Xlist" v-if="show">
      <li @click="gtwd">新建文档</li>
      <li @click="gtzsk">新建知识库</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:JSON.parse(window.localStorage.user).name,
      show:false
    }
  },
  methods:{
    showTrue(){
      this.show=!this.show;
    },
    gtwd(){
      this.$router.push('/home/edmtwd');
      this.show=false;
    },
    gtzsk(){
      this.$router.push('/home/edmtzsk');
      this.show=false;
    },
    goBack(){
      this.$router.push('/deng')
    }
  }
};
</script>


<style scoped>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
  background-color: blue;
  color: #fff;
  /* position: relative; */
}
.headermenu{
  width:230px;
  height: 30px;
  display: flex;
}
input{
  width:200px;
  height:22px;
  border-radius: 15px;
  border:0;
  outline: none;
  padding-left:10px;
}
.Xlist{
  width:100px;
  height:80px;
  border:1px solid #ccc;
  position: fixed;
  top:30px;
  right:310px;
  color:#000;
  z-index: 999;

}
.Xlist li{
  width:100%;
  height:40px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
}
.add{
  width:28px;
  height:28px;
  border: 1px solid #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 28px;
  margin-right: 3px;
  font-size: 16px;
}
button{
  width:60px;
  height:22px;
  border:0;
  outline: none;
  background-color:#ccc;
  color:#fff;
  border-radius: 10px;
}
</style>