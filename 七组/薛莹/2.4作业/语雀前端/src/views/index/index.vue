<template>
  <div class="index">
      <div class="header">
          <h3>语雀</h3>
          <div class="input-box" v-if="$route.meta.show">
              <input type="text">
              <button>搜索</button>
          </div>
          <p class="con">
            <span @click="show">+</span>
            <span>退出</span>
          </p>
          <ul :class="['ul', isshow ? 'add' : '']">
              <li @click="goToknow">新增知识库</li>
              <li @click="goTofile">新增文件</li>
          </ul>
      </div>
      <div class="main">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isshow:false
        }
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        goToknow(){
            this.isshow = false;
            this.$router.push("/index/addknow")
        },
        goTofile(){
            this.isshow = false;
            this.$router.push("/index/addfile")
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
        span{
            padding: 0 10px;
        }
    }
    .con{
        position: relative;
    }
    .ul{
        position: absolute;
        top: 50px;
        right: 145px;
        color: #000;
        border:1px solid; 
        z-index: 9;
        display: none;
    }
    .ul.add{
        display: block;
    }
    .main{
        width: 100%;
        flex: 1;
        overflow: auto;
    }
</style>