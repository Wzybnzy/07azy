<template>
  <div class="home">
    <div class="top">
      <div class="search"></div>
      <span class="add" @click="add">+</span>
      <div class="select" v-if="flag">
        <span @click="addknow">添加知识库</span>
        <span>添加文档</span>
      </div>
      <div class="user">
        <p>{{username}} 您好</p>
        <span @click="out">退出</span>
      </div>

    </div>
    <div class="main">
      <div class="left">
        <router-link to="/home/list">列表</router-link>

        <router-link to="/home/file">知识库</router-link>
        <router-link to="/home/collect">收藏</router-link>
        <router-link to="">关注</router-link>

      </div>
      <div class="right"><router-view/></div>
    </div>
        

  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      flag:false
    }
  },
  mounted() {
    this.username=localStorage.getItem('username')
  },
  methods: {
    out(){
      localStorage.clear()
      this.$router.push('/')
    },
    add(){
      this.flag=!this.flag
    },
    addknow(){
      this.$router.push('/addknow')
    }
  },
}
</script>

<style>
body,html,#app,.home{
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
.home{
  display: flex;
  flex-direction: column;
}
.top{
  width: 100%;
  height: 60px;
  background-color: yellowgreen;
  display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
}
.select{
  position: absolute;
  width: 100px;
  height: 47px;
  border: 1px solid white;
  top: 48px;
  left: 1223px;
}
.select>span{
  display: block;
  background-color: rgb(56, 54, 58);
  color: white;
  border: 1px solid white;
}
.search{
  flex: 1;
  height: 100%;
}
.add{
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 50%;
  border: 2px solid white;
  font-size: 25px;

}
.user{
  margin-left: 15px;
  margin-right: 50px;
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: center;
}
.user>span{
  color: white;
  font-weight: 700;
  margin-left: 20px;
}
.main{
  flex: 1;
  width: 100%;                         
  overflow: auto;
  display: flex;
}
.left{
  width: 265px;
  height: 100%;
  border-right: 1px solid black;
}
.right{
  flex: 1;
  height: 100%;
}
.left>a{
  display: block;
  width: 100%;
  height: 65px;
  text-decoration: none;
  text-align: center;
  line-height:65px;
}
</style>