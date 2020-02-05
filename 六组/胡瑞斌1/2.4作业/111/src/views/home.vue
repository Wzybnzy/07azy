<template>
  <div>
    <header>
      <div class="headerleft">
        <h3>语雀</h3>
        <div v-if="$route.meta.show">
          <input placeholder="请输入搜索内容" v-model="input" />
          <button>搜索</button>
        </div>
      </div>
      <div class="headerright">
          <div @click="showmenu">+</div>
          <div>欢迎您：{{name}}</div>
          <span>退出</span>
      </div>
      <ul :class="['headermenu',!flag?'none':'']">
          <li>新建文档</li>
          <li @click="goToknow">新建知识库</li>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            input:'',
            flag:false
        }
    },
    methods:{
        showmenu(){
            this.flag=!this.flag
        },
        goToknow(){
            this.flag = false,
            this.router.push({name:'addknow'})
        }
    }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 40px;
  display: flex;
  line-height: 30px;
}
.tab {
  display: flex;
}
.headermenu {
  position: absolute;
  right: 90px;
  top: 30px;
}
h3{
    margin: 0 10px;
}
.none {
  display: none;
}
.headermenu > li {
  line-height: 26px;
  list-style: none;
}
.headerleft,
.headerleft > div {
  display: flex;
}
.headerright {
  display: flex;
  margin-left:260px; 
}
.headerleft>div input{
    width: 100px;
    height: 20px;
    margin-top: 3px;
    line-height: 30px;
    margin-left: 50px;
}
.headerleft>div button{
    height: 20px;
    line-height: 20px;
    margin-left: 20px;
    margin-top: 5px;
}
.headerright > div:nth-child(1) {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-top: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 100%;
}
</style>